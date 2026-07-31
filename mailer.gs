function processMailQueue() {
  const sheetUrl = "INSERT_SPREADSHEET_URL_HERE";
  const sheetName = "Sheet1";

  const ss = SpreadsheetApp.openByUrl(sheetUrl);
  const sheet = ss.getSheetByName(sheetName);
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    const recipient = data[i][0];
    const subject = data[i][1];
    const body = data[i][2];
    const fileName = data[i][3];

    if (!recipient || !subject || !body || !fileName) {
      continue;
    }

    const files = DriveApp.getFilesByName(fileName);
    const attachments = [];

    if (files.hasNext()) {
      const file = files.next();
      attachments.push(file.getAs(file.getMimeType()));
    } else {
      continue;
    }

    GmailApp.sendEmail(recipient, subject, body, {
      attachments: attachments
    });
  }
}
