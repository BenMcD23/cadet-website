// this isnt for the main website, its a google apps script for the contact form functionality, just here so dont loose or anything

function doPost(e) {
  const data = e.parameter;

  submitFormData(data);
  return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' })).setMimeType(ContentService.MimeType.JSON);
}

function submitFormData(data) {
  const timestamp = new Date();

  const spreadsheetId = '1Yv3JoNhQG8MjZ8Mgj0SFvgLkPszagoZ1kTf4hxTpqKc';  // Use the Spreadsheet ID

  // Open the spreadsheet by ID
  const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();

  sheet.appendRow([timestamp, data.Name, data.Email, data.Contact_Reason, data.Message]);

  // send email
  MailApp.sendEmail({
    to: "mcdonaldben02@gmail.com",
    replyTo: data.Email,
    subject: "Contact Form Submission",
    htmlBody: `
      <p>The website's contact form has been filled out</p>
      <h2>Name:</h2><p>${data.Name}</p>
      <h2>Contact Reason:</h2><p>${data.Contact_Reason}</p>
      <h2>Message:</h2><p>${data.Message}</p>
    `
  });
    
  }



