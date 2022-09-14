const save = document.getElementById('btn');
const remove = document.getElementById('btnRemove');
const result = document.getElementById('inputResult');
const list = document.getElementById('list');

// let value = result.value;
let array = [];

function showText(){
  array.push(result.value);
  list.innerHTML = array; 
}

function removeOldestValue(){
  array.shift()
  list.innerHTML = array;
}

save.addEventListener('click', showText);
remove.addEventListener('click', removeOldestValue);