let score = "33"

// console.log(typeof score)
// console.log(typeof(score));

let valueInNumber = Number(score);//this is the way to convert a string into a number
//console.log(typeof valueInNumber);


let s = "33abc"

let n = Number(s);//33abc abc are not numbers though it will convert
//console.log(typeof n)
//console.log(n);//but the value will be Nan: not a number


let a = null
let b = Number(a);
//console.log(b); // null will be converted into 0 in numbers

let c = undefined
let d = Number(c);
//console.log(d);// undefined will be Nan

//similarly the boolean value like true wil be 1 and false will be 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);


//1 => true
// 0 => false
// " " => false
// "soureen" => true

//now convert number into string

let num = 33
let numString = String(num)

//console.log(numString);
//console.log(typeof numString);


// ***********************Operations********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2**3); // power


let str1 = "Soureen"
let str2 = " Laha"
let str3 = str1 + str2
// console.log(str3);


// console.log("1" + 2); // => 12
// console.log(1 + "2"); // => 12
// console.log("1" + 2 + 2); //=> 122
// console.log(1 + 2 + "2"); // => 32

console.log(+true);
console.log(+"");

