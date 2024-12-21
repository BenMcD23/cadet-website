// this isnt for the main website, its a google apps script for the contact form functionality, just here so dont loose or anything

function doPost(e) {
  const data = e.parameter;
  
  // Basic validation
  if (!data.Name || !data.Email || !data.Contact_Reason || !data.Message) {
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'message': 'Invalid input' })).setMimeType(ContentService.MimeType.JSON);
  }

  submitFormData(data);
  return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' })).setMimeType(ContentService.MimeType.JSON);
}

function submitFormData(data) {
  const timestamp = new Date();
  const spreadsheetId = '1PVvSWH6aWN7Z6LHJZaHn14xMjeH7xKRgvF6haDkmkm4'; 

  const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();

  // Basic sanitization
  const sanitizedName = sanitizeInput(data.Name);
  const sanitizedEmail = sanitizeInput(data.Email);
  const sanitizedContactReason = sanitizeInput(data.Contact_Reason);
  const sanitizedMessage = sanitizeInput(data.Message);

  sheet.appendRow([timestamp, sanitizedName, sanitizedEmail, sanitizedContactReason, sanitizedMessage]);

  MailApp.sendEmail({
    to: "adj.317@rafac.mod.gov.uk",
    replyTo: sanitizedEmail,
    subject: "Contact Form Submission",
    htmlBody: `
      <p>The website's contact form has been filled out</p>
      <h2>Name:</h2><p>${sanitizedName}</p>
      <h2>Contact Reason:</h2><p>${sanitizedContactReason}</p>
      <h2>Message:</h2><p>${sanitizedMessage}</p>
    `
  });
}

function sanitizeInput(input) {
  const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      "/": '&#x2F;',
  };
  const reg = /[&<>"'/]/ig;
  return input.replace(reg, (match)=>(map[match]));
}
