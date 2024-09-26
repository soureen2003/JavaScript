//primitive 

//7 types: String, Number,Boolean,null,undefined,Symbol,BigInt


//Reference (Non Primitive)

//Array, Object, Functions

//JavaScript is a dynamically typed laguage cause in this language we don't need to specify the type of variable
//it is determined at the run time

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//array
const hero = ["netaji", "swamiji","vidyasagar"]

//object
let myObj = {
    name: "Soureen",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof hero);
