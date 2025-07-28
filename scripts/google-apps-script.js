// Google Apps Script code to handle form submissions
// Deploy this as a Web App in Google Apps Script

function doPost(e) {
  try {
    // Get the active spreadsheet (create one first and get its ID)
    const SPREADSHEET_ID = "1QLDx7CyF9zG-eZvz0QaLXhJ_JPYYqC_J9A45T2aH3tY" // Replace with your Google Sheet ID
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet()

    // Parse the JSON data
    const data = JSON.parse(e.postData.contents)

    // Check if headers exist, if not create them
    if (sheet.getLastRow() === 0) {
      const headers = ["Timestamp", "Name", "Phone Number", "Email", "Company Name", "Business Category", "Invited By"]
      sheet.getRange(1, 1, 1, headers.length).setValues([headers])

      // Format headers
      const headerRange = sheet.getRange(1, 1, 1, headers.length)
      headerRange.setFontWeight("bold")
      headerRange.setBackground("#4285f4")
      headerRange.setFontColor("white")
    }

    // Add the new row
    const newRow = [
      new Date(data.timestamp),
      data.name,
      data.phone,
      data.email,
      data.companyName,
      data.businessCategory,
      data.invitedBy || "",
    ]

    sheet.appendRow(newRow)

    // Auto-resize columns
    sheet.autoResizeColumns(1, 7)

    return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() })).setMimeType(
      ContentService.MimeType.JSON,
    )
  }
}

function doGet() {
  return ContentService.createTextOutput("Networking Event Registration API is running").setMimeType(
    ContentService.MimeType.TEXT,
  )
}
