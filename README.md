# Mass-mail

A lightweight, scalable mass mailing solution utilizing Gmail, Google Sheets, and Google Apps Script. It parses recipient data, dynamically attaches files directly from Google Drive, and processes emails sequentially.

## Resources

* [Download Template CSV](https://github.com/Reinhart-py/Mass-mail/blob/main/example-sheet.csv) *(Click the "Download raw file" ⬇️ icon at the top right)*
* [Mass-mail Apps Script Template](https://script.google.com/d/1cY59mzmrpUJiFMPPQjO4NF2LmSLFIghc-Vnh3AL1-D0dHe5vsNXb4ett/edit?usp=sharing)

## Setup & Execution

1. **Prepare Data:** 
   Download the CSV template and import it into a new Google Sheet. Populate the columns adhering strictly to the structure below. All referenced attachments must exist in your Google Drive.
2. **Deploy Script:** 
   Open the Apps Script Template link above. On the left-hand sidebar, click the **Overview (i)** icon. Then, click the **Make a copy** icon in the top right corner to clone the script into your own Google Workspace.
3. **Configure:** 
   In your cloned script, update the `sheetUrl` variable with the full URL of your newly created Google Sheet.
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
