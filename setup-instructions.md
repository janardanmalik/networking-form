# Google Sheets Integration Setup

Follow these steps to connect your form to Google Sheets:

## Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Networking Event Registrations"
4. Copy the spreadsheet ID from the URL (the long string between `/d/` and `/edit`)

## Step 2: Set up Google Apps Script
1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the code from `scripts/google-apps-script.js`
4. Replace `YOUR_SPREADSHEET_ID_HERE` with your actual spreadsheet ID
5. Save the project with a name like "Networking Registration Handler"

## Step 3: Deploy the Script
1. Click "Deploy" > "New deployment"
2. Choose "Web app" as the type
3. Set execute as "Me"
4. Set access to "Anyone"
5. Click "Deploy"
6. Copy the Web App URL

## Step 4: Update the Form
1. In `registration-form.tsx`, replace `YOUR_SCRIPT_ID` in the `GOOGLE_SCRIPT_URL` with your Web App URL
2. Test the form to ensure data flows to your Google Sheet

## Step 5: Test the Integration
1. Fill out and submit the form
2. Check your Google Sheet to see if the data appears
3. The sheet will automatically create headers on the first submission

## Troubleshooting
- Make sure the Google Apps Script has permission to access your Google Sheet
- Ensure the Web App is deployed with "Anyone" access
- Check the Apps Script execution log for any errors
