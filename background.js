chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "searchInExcel",
        title: "Search",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "searchInExcel") {
        console.log("Selected Text:", info.selectionText);  // Debugging output

        fetch("http://127.0.0.1:5000/search", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: info.selectionText })
        })
        .then(response => response.json())
        .then(data => {
            console.log("Server response:", data);  // Debugging output
        })
        .catch(error => {
            console.error("Error:", error);  // If something goes wrong
        });
    }
});
