// console.log("background");
chrome.tabs.onCreated.addListener(function(tab){
    console.log(tab);
})

chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
    // console.log(changeInfo);
    // console.log(tabId);
    // console.log(tab);
    if(tab.url.includes("youtube")){
        // console.log("youtube");
        chrome.tabs.remove(tabId);
    }
})