import pandas as pd
import pyautogui
import tkinter as tk
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


EXCEL_FILE = "All-Media-links-site-ernest.xlsx"  
COLUMN_NAME = "ID"  

df = pd.read_excel(EXCEL_FILE, usecols=[COLUMN_NAME]) 
values_set = set(df[COLUMN_NAME].astype(str))

app = Flask(__name__)

def show_popup(text):
    root = tk.Tk()
    root.overrideredirect(True) 
    root.attributes("-topmost", True)  
    
    label = tk.Label(root, text=text, bg="yellow", fg="black", padx=10, pady=5)
    label.pack()
    
    # Get cursor position
    x, y = pyautogui.position()
    root.geometry(f"+{x+20}+{y+20}")  
    
    def close_popup():
        root.destroy()
    
    root.after(2000, close_popup)  
    root.mainloop()

@app.route("/search", methods=["POST"])
def search():
    data = request.json
    text = data.get("text", "").strip()

    print(f"Received text: {text}")  

    if text:
        if text in values_set:
            show_popup("Found")
        else:
            show_popup("Not Found")
    
        return jsonify({"status": "done"})
    return jsonify({"status": "error", "message": "No text provided"}), 400


if __name__ == "__main__":
    app.run(port=5000)
