const firstName = document.getElementById("name");
const link = document.querySelector("a");

const showName = () => {
  if(firstName.value.length < 2){
    alert("Enter a name");
    console.log("not valid")
  }
  else{
    alert("Welkom " + firstName.value);
  }
}

const toClose = () => {
  alert("Te dichtbij");
}

document.getElementById("btn").addEventListener("click", showName);
link.addEventListener("mousemove", toClose);