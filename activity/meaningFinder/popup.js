const api = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${name}&exchars=500&explaintext=1"

let inputBox = document.querySelector("#search");
let searchBtn = document.querySelector(".serach-btn");
let content = document.querySelector(".content");

inputBox.addEventListener("change",function(){
    let value = inputBox.value;
    console.log(value);
})
