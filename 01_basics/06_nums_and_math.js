const score = 400

const newNumber = new Number(100);

// console.log(score);
// console.log(newNumber);

// console.log(newNumber.toString());
// console.log(newNumber.toString().length);

//console.log(newNumber.toFixed(2));

const otherNumber = 123.8966
//console.log(otherNumber.toPrecision(4));

const hundreds = 100000000
//console.log(hundreds.toLocaleString('en-In'));


//*******************************Math********************************

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.4));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));


console.log(Math.random()); // value of random lies between 0 to 1
console.log((Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min +1))+min);
