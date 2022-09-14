const input = document.querySelector('#todo');
const addBtn = document.querySelector('#addBtn');
const cont = document.getElementById('container');


function Todo() {
  const todo = input.value;
  const newTodo = document.createElement('li');
  newTodo.textContent = todo;
  cont.appendChild(newTodo);
  const button = document.createElement('button');
  button.textContent = 'Delete';
  newTodo.appendChild(button);
  input.value = "";

  button.addEventListener('click', function(){
    cont.removeChild(newTodo);
  });
}




addBtn.addEventListener('click', Todo);

console.log(document)


