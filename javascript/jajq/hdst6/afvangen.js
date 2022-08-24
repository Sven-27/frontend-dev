const img = document.getElementById("imgContainer");

window.addEventListener("load", onLoad);

function onLoad(){
  const result = document.getElementById("result");
  document.getElementById("imgContainer").addEventListener("click", function(){
    result.innerHTML = this.attributes["src"].value;
  }, false);
}
  
  function replaceImage(){
    document.innerHTML = img.src = "../../../Inleveropdrachten/css/responsive/images/tree-at-sea.jpg";
  }

img.addEventListener("mouseover", replaceImage);