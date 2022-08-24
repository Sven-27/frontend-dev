const myArray = [6, 87, 43, 9, 22, 66, 98, 3];

const ArrayUtils = {
  shuffle: function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }
}

console.log(ArrayUtils.shuffle.call(null, myArray));
console.log("2" * "5")

// function sample(a, b) {
//   a++;
//   b++;
//   return a + b;
// }

  var sample = function (m, n) {
    return m++ + n++;
  }




console.log(sample(1, 2));

var x = 10, y = "10.1x", z = "15xy";
var a =  parseFloat(z);
document.write(a);

function dateTodayTomorrow(a, b) {
  a.concat(b);
  return a.valueOf();
}
alert(dateTodayTomorrow('Wednesday', 'Thursday'));
