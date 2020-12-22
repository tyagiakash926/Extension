let ul = document.querySelector(".blocker-sites");
let input = document.querySelector(".type");
let blockBtn = document.querySelector(".block-btn");
let tickBox = document.querySelector("#checkbox");
let blockerSite;
let gBlockList = [];

chrome.runtime.sendMessage({type:"getList"} , function(blockList){
  gBlockList = blockList;
  for(let i=0 ; i<blockList.length ; i++){
      addSiteToBeBlocked(blockList[i].site);
  }
})

input.addEventListener("change",function(){
    blockerSite = input.value;
    console.log(blockerSite)
})
function addSiteToBeBlocked(block){
  var node = document.createElement("LI");
  node.className = "blockurl";
  var textnode = document.createTextNode(`${block}`);
  var icon = document.createElement("i");
  icon.className = "fas fa-trash";
  node.appendChild(textnode);
  node.appendChild(icon);
  ul.appendChild(node);

  if(tickBox.checked==true){
    document.body.style.backgroundColor = "#34495e";
    document.getElementsByClassName("type")[0].style.backgroundColor="#bdc3c7"
    // document.getElementsByClassName("block-btn")[0].style.backgroundColor = "#3498db";
    if(document.getElementsByClassName("blockurl")){
      for(let i=0;i<document.getElementsByClassName("blockurl").length;i++){
        document.getElementsByClassName("blockurl")[i].style.color = "white";
      document.getElementsByClassName("blockurl")[i].style.fontWeight = "bold";
      }
    }
  }

  icon.addEventListener("click",function(){
    let tag = icon.parentNode.textContent;
    icon.parentNode.remove();
    console.log(tag);
    // delete site from the blocklist
    chrome.runtime.sendMessage({type:"delete" , site:tag}, function(response) {
    console.log(response);    
    });
    
  })
  
}
blockBtn.addEventListener("click",function(){
  // input.value = "";
  // if(blockerSite){
  //   for(let i=0 ; i<gBlockList.length ; i++){
  //     if(gBlockList[i].site == blockerSite){
  //         blockerSite = "";
  //         return;
  //     }
  //     gBlockList.push({site:blockerSite});
  //     addSiteToBeBlocked(blockerSite);
  //     blockerSite = "";
    
  //   }
  //   if(blockerSite){
  //     addSiteToBeBlocked(blockerSite);
  //      // add in blocklist Array
  //     chrome.runtime.sendMessage({type:"add" , site:`${blockerSite}`}, function(response) {
  //       console.log(response);
  //     }); 
  //     blockerSite="";
  //   }
  // }

  let value = input.value;
  if (value) {

    for(let i=0 ; i<gBlockList.length ; i++){
        if(gBlockList[i].site == value){
            input.value = "";
            return;
        }
    }
    gBlockList.push({site:value});
    addSiteToBeBlocked(value);
    input.value = "";
    
    // add site to be blocked !!
    chrome.runtime.sendMessage({type:"add" , site:value}, function(response) {
        console.log(response);
    }); 
} 
})

tickBox.addEventListener("click",function(){
  if(tickBox.checked==true){
    document.body.style.backgroundColor = "#34495e";
    document.getElementsByClassName("type")[0].style.backgroundColor="#bdc3c7"
    // document.getElementsByClassName("block-btn")[0].style.backgroundColor = "#3498db";
    if(document.getElementsByClassName("blockurl")){
      for(let i=0;i<document.getElementsByClassName("blockurl").length;i++){
        document.getElementsByClassName("blockurl")[i].style.color = "white";
      document.getElementsByClassName("blockurl")[i].style.fontWeight = "bold";
      }
    }
  }else{
    document.body.style.backgroundColor = "transparent";
    document.getElementsByClassName("type")[0].style.backgroundColor="rgb(244, 249, 253)"
    document.getElementsByClassName("block-btn")[0].style.color = "#fff";
    // document.getElementsByClassName("block-btn")[0].style.border = "thin solid rgb(238, 84, 84)";
    // document.getElementsByClassName("block-btn")[0].style.border = "thin solid rgb(238, 84, 84)";
    if(document.getElementsByClassName("blockurl")){
      document.getElementsByClassName("block-btn")[0].style.color = "black";
      for(let i=0;i<document.getElementsByClassName("blockurl").length;i++){
        document.getElementsByClassName("blockurl")[i].style.color = "rgb(230, 25, 25)";
      document.getElementsByClassName("blockurl")[i].style.fontWeight = "400";
      }
    }
    

  }
})

