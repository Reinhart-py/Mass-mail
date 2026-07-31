# Mass-mail

A simple tool to send mass emails using Gmail, Google Sheets, and Google Apps Script. It reads your list of emails, adds files straight from your Google Drive, and sends the emails one by one.

## Setup Guide

1. **Copy the Template:** 
   Click here to make your copy: [Mass-mail Template](https://docs.google.com/spreadsheets/d/1AGeYhFCQQodMyJ8e7AmXXQig3ap-ZVTIweT0S3uoljc/copy)
2. **Add Your Data:** 
   Fill the sheet with your email details. Make sure any files you want to attach are already saved in your Google Drive.
3. **Add the Sheet Link:** 
   In your new Google Sheet, click **Extensions > Apps Script** at the top. Find the `sheetUrl` line at the top of the code and paste your new Google Sheet's web link there.
4. **Send Emails:** 
   Select `processMailQueue` at the top of the script page and click **Run**. The first time you do this, Google will ask for permission to use your Gmail and Drive.

## How to Fill the Sheet

Start your data on row 2. Keep row 1 for the headers.

| Column | What it does |
| :--- | :--- |
| **A** | The email address you are sending to |
| **B** | The subject of the email |
| **C** | The main message (you can use multiple lines) |
| **D** | The exact name of the file in your Drive (example: `document.pdf`) |
