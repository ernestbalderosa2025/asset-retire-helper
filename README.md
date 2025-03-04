# Excel Search Extension

This project provides a Chrome extension that allows users to search for IDs in an Excel file and open associated URLs in a tab group. It also features a Flask backend that performs the search in the Excel file and responds with the matching results.

## Features:
- Search for an ID in an Excel file via a Chrome extension.
- Open all associated URLs in a new tab group if the ID is found.
- User-friendly interface with context menu integration in Chrome.

---

## How to Add Your Own Excel File

### Step 1: Prepare Your Excel File
1. Add your Excel file in the same directory. I just made a copy of "All-Media-links-site".

### Step 2
1. Locate the Python script `fileChecker_retire.py`.
2. Replace the current Excel file (`All-Media-links-site-ernest.xlsx`) with your new file.
3. Update the filename in the script if needed. You can find this line:
   ```python
   EXCEL_FILE = "All-Media-links-site-ernest.xlsx"  # Change this to your file name
4. Ensure that the column names in the Excel file match what is used in the script (ID and Page URL).

## How to Run through Thonny
1. Download and open the Thonny IDE
2. Open the fileChecker_retire.py script
3. Install the required libraries
    - Click the "tools" tab.
    - Click **Open System Shell**
    - Paste the following:
      ```python
      pip install pandas openpyxl flask pyautogui

## How to use the Chrome Extension
### Step 1: Load the Extension into Chrome
1. Go to chrome://extensions/ in Chrome.
2. Enable Developer mode by toggling the switch in the top right. <br>
![image](https://github.com/user-attachments/assets/d237f63a-761d-4252-9b8e-668abebe7de0)

3. Click **Load unpacked** and select the directory where this repository is stored. <br>
![image](https://github.com/user-attachments/assets/b5d7bf6e-b79f-4888-9af5-815fcf25604c)

4. The extension should now be loaded and available.
### Step 2: Run the fileChecker_retire.py file <br>
![image](https://github.com/user-attachments/assets/3d2e95f0-7b2f-42f6-9122-dd55838f61ee)

### Step 3: Use the extension
1. Highlight any text in a webpage (the ID you want to search for).
2. Right-click and select Search from the context menu.
3. If the ID is found in the Excel file, the corresponding URLs will open in a new tab group.
4. Don't close Thonny, so that the extension keeps running.
  
