# Mass-mail

A lightweight, scalable mass mailing solution utilizing Gmail, Google Sheets, and Google Apps Script. It parses recipient data, dynamically attaches files directly from Google Drive, and processes emails sequentially.

## Resources

* [Download Template CSV](https://github.com/Reinhart-py/Mass-mail/blob/main/example-sheet.csv) *(Click the "Download raw file" ⬇️ icon at the top right)*
* [1-Click Script Deployment](https://script.google.com/d/1cY59mzmrpUJiFMPPQjO4NF2LmSLFIghc-Vnh3AL1-D0dHe5vsNXb4ett/copy)

## Setup & Execution

1. **Prepare Data:** 
   Download the CSV template and import it into a new Google Sheet. Populate the columns adhering strictly to the structure below. All referenced attachments must exist in your Google Drive.
2. **Deploy Script:** 
   Click the 1-Click deployment link above to clone the script into your Google Workspace.
3. **Configure:** 
   In the cloned script, update the `sheetUrl` variable with the full URL of your newly created Google Sheet.
4. **Execute:** 
   Select the `processMailQueue` function and click **Run**. Initial execution requires OAuth authorization for Gmail and Drive access.

## Data Structure

Data must begin on row 2. Row 1 is reserved for headers.

| Column | Description |
| :--- | :--- |
| **A** | Target Email Address |
| **B** | Subject Line |
| **C** | Email Body (Supports standard multi-line formatting) |
| **D** | Exact Attachment File Name (e.g., `document.pdf`) |
