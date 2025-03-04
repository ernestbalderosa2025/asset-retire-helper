chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "searchInExcel",
        title: "Search",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "searchInExcel") {
        fetch("http://127.0.0.1:5000/search", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: info.selectionText })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === "FOUND") {
                const urls = data.urls;
                console.log("URLs Found:", urls);  

                
                chrome.tabs.create({ url: urls[0] }, (firstTab) => {
                    console.log("First tab created:", firstTab);  
                     chrome.tabs.group({ tabIds: [firstTab.id] }, (groupId) => {
                        console.log("Group created with ID:", groupId);  // Debugging output
                        
                       
                        for (let i = 1; i < urls.length; i++) {
                            chrome.tabs.create({ url: urls[i] }, (newTab) => {
                                console.log("New tab created:", newTab);  
                                chrome.tabs.group({ groupId: groupId, tabIds: [newTab.id] });
                            });
                        }
                    });
                });
            } else {
                alert("ID not found!");
            }
        })
        .catch(error => console.error("Error:", error));
    }
});
