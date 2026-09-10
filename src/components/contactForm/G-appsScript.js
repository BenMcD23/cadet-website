// This is not part of the website bundle. It is the Google Apps Script behind the
// contact form, kept here so it isn't lost. The deployed script in Google Apps
// Script is the source of truth; paste changes there after editing this file.

// Name of the hidden honeypot field in contactForm.jsx. Real users never see it,
// so anything that fills it in is a bot. Keep this in sync with the form.
const HONEYPOT_FIELD = 'Fax_Number';

function doPost(e) {
  const data = e.parameter;

  // Honeypot: silently drop bot submissions. We still return "success" so the
  // bot doesn't learn it was caught and try something else.
  if (data[HONEYPOT_FIELD]) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: 'success' })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  // Basic required fields validation
  if (!data.Name || !data.Email || !data.Contact_Reason || !data.Message) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: 'error', message: 'Missing required fields' })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  submitFormData(data);

  return ContentService.createTextOutput(
    JSON.stringify({ result: 'success' })
  ).setMimeType(ContentService.MimeType.JSON);
}

function submitFormData(data) {
  const spreadsheetId = '1PVvSWH6aWN7Z6LHJZaHn14xMjeH7xKRgvF6haDkmkm4';
  const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();

  // Sanitize inputs
  const sanitizedName = sanitizeInput(data.Name);
  const sanitizedEmail = sanitizeInput(data.Email);
  const sanitizedPhone = sanitizeInput(data.Phone || '');
  const sanitizedContactReason = sanitizeInput(data.Contact_Reason);
  const sanitizedMessage = sanitizeInput(data.Message);

  // Format DOB from YYYY-MM-DD to DD-MM-YYYY if present
  let formattedDOB = '';
  if (data.Date_of_Birth) {
    const dobDate = new Date(data.Date_of_Birth);
    if (!isNaN(dobDate)) {
      const day = String(dobDate.getDate()).padStart(2, '0');
      const month = String(dobDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const year = dobDate.getFullYear();
      formattedDOB = `${day}-${month}-${year}`;
    }
  }

  // Append raw DOB to sheet for sorting/filtering
  sheet.appendRow([
    new Date(),
    sanitizedName,
    sanitizedEmail,
    sanitizedPhone,
    sanitizedContactReason,
    data.Date_of_Birth || '', // Store original ISO value
    sanitizedMessage
  ]);

  // Build email body
  let emailBody = `The website's contact form has been filled out\n\n` +
    `Name:\n${sanitizedName}\n\n` +
    `Email:\n${sanitizedEmail}\n\n` +
    `Phone Number:\n${sanitizedPhone}\n\n` +
    `Contact Reason:\n${sanitizedContactReason}\n\n`;

  if (formattedDOB) {
    emailBody += `Cadet Date of Birth:\n${formattedDOB}\n\n`;
  }

  emailBody += `Message:\n${sanitizedMessage}`;

  // Send email
  GmailApp.sendEmail(
    "adj.317@rafac.mod.gov.uk, ci.mcdonald@317atc.co.uk",
    "Contact Form Submission",
    emailBody
  );
}

// Helper function to sanitize input
function sanitizeInput(input) {
  if (!input) return '';
  return input.replace(/["'<>]/g, '');
}
