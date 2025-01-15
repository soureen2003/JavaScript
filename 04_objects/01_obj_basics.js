const mySymbol = Symbol("key1")



//object literals

const JsUser = {
    name: "Soureen",
    email: "soureenlaha@gmail.com",
    age: 22,
    location: "Bankura",
    isLogged: false,
    [mySymbol]: "key1"

}
//there is a datatype called symbol in javascript

console.log(JsUser.email);
console.log(JsUser[mySymbol]);
console.log(typeof mySymbol);

