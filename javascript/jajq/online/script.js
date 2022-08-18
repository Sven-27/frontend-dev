const container = document.getElementById('container');

alert("Pagina geladen");

let question = prompt("Wat is je naam?");

let txt;

if(confirm("Uw naam is " + question + "?") === true){
    txt = "Welkom " + question + " een fijne dag gewenst!";
}else{
    question = prompt("Wat is uw naam?");
}
if(question === null || question === ""){
  txt = "User cancelled the prompt";
}else{
  txt = "Welkom " + question + " een fijne dag gewenst!";
}

document.write(txt);