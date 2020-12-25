// const api = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${name}&exchars=500&explaintext=1"

let inputBox = document.querySelector("#search");
let searchBtn = document.querySelector(".search-btn");
let content = document.querySelector(".content");
let paragraph ;
searchBtn.addEventListener("click",function(){
    console.log("HII");
    let value = inputBox.value;
    if(value){
        console.log(value);
        chrome.runtime.sendMessage({type:"add" , site:value}, function(response) {
            console.log(response);
            // content.textContent(response);
        }); 
    }
})
