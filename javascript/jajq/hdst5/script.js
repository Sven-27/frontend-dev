// function hello(){
//   const user = prompt("text", "goes here");
//   console.log(user);
// }

// hello()

// function addUp(){
//   const num1 = prompt("enter number");
//   const num2 = prompt("enter a second number");
//   console.log(parseInt(num1) + parseInt(num2));
// }

// addUp();

// function numberofParams(arg1, arg2, arg3){
//   console.log(arguments.length);
// }

// numberofParams(3, 5, 6, 8)

// const names = ["Sven", "Anneke", "Gizmo", "Mickey", "Ayden"];

// console.log(names.length);
// const filter = names.filter(function(element, index){
//   return (index % 2 === 0);
// });
// console.log(filter);

// console.log(names.sort());
// const person = prompt("Vul je naam in");
// const list = names.push(person);
// console.log(list);
// const stringNames = names.toString("");
// console.log(stringNames);

// const array = ["Sven", "anneke", "gizmo", "Mickey", "Ayden"];

// const sorted = array.sort((a, b) => {
//   const first = a.toLowerCase();
//   const second = b.toLocaleLowerCase();

//   if(first < second){
//     return -1;
//   }
//   if(first > second){
//     return 1;
//   }
//   return 0;
// })

// console.log(sorted);

const getallen = [1, 2, 3, 10, 20, 30, 40];

// function timesTen(){
//   const multiply = getallen.map(number => number * 10)
//   return multiply;
// }

// console.log(timesTen())

function smallerThanTen(){
  const filter = getallen.filter((item) => {
    return item <= 10
  })
  return filter
}

console.log(smallerThanTen())