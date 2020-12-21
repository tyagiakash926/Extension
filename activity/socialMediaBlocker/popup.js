let ul = document.querySelector(".blocker-sites");
let input = document.querySelector(".type");
let blockBtn = document.querySelector(".block-btn");
let blockerSite;
input.addEventListener("change",function(){
    blockerSite = input.value;
    console.log(blockerSite)
})
blockBtn.addEventListener("click",function(){
  input.value = "";
  var node = document.createElement("LI");
  node.className = "blockurl";
  var textnode = document.createTextNode(`www.${blockerSite}.com`);
  var icon = document.createElement("i");
  icon.className = "fas fa-trash";
  node.appendChild(textnode);
  node.appendChild(icon);
  ul.appendChild(node);
  icon.addEventListener("click",function(){
        icon.parentNode.remove();
  })
})
