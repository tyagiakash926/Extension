console.log("background");
let globalResult ="hii";
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.type=="add"){
        finder(request.site);
        console.log(globalResult,"insend response")
        sendResponse(true);
    } 
});

function  finder(word){
    fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${word}&exchars=500&explaintext=1`).then(r => r.json()).then(result => {
    // Result now contains the response text, do what you want...
    
    const entries = Object.entries(result.query.pages);
    console.log(entries[0][1].extract);
    });
}


