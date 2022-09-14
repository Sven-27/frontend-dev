const paragraph = document.querySelectorAll('.special');
const input = document.querySelector('#replace');
const button = document.querySelector('#btn');



function replaceText() {
  const text = input.value;
  for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].textContent = text;
  }
  input.value = "";
}

button.addEventListener('click', replaceText);
