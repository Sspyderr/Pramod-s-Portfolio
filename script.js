let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

function doPost(e) {
    try {
      const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("FormData");
      const data = e.parameter;
      const newRow = [
        data.full_name,
        data.email,
        data.phone_number,
        data.subject,
        data.message,
        new Date()
      ];
      sheet.appendRow(newRow);
      Logger.log(newRow);
      const output = ContentService.createTextOutput(JSON.stringify({ 'result': 'success' })).setMimeType(ContentService.MimeType.JSON);
      output.setHeader("Access-Control-Allow-Origin", "*");
      return output;
    } catch (error) {
      Logger.log(error.toString());
      const output = ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'message': error.toString() })).setMimeType(ContentService.MimeType.JSON);
      output.setHeader("Access-Control-Allow-Origin", "*");
      return output;
    }
  }
  