const input = document.getElementById("inputResult");
const button = document.getElementById("btn");
const result = document.getElementById("result");

let index = 0;

function addText() {
  index = index++ === 6 ? 1 : index;
  console.log(index)
  result.innerHTML += `<h${index}>${input.value}</h${index}>`;
}

button.addEventListener("click", addText);