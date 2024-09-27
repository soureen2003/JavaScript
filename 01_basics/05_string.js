const name = "Soureen"
const repoCount = 4

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//this is called string interpoletion

const gameName = new String("Omen-Sage")
console.log(gameName);
console.log(gameName.length);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('O'));
const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const myName = "  Soureen  "
console.log(myName);
console.log(myName.trim());

const url = "https://soureen.com/soureen%20laha"
console.log(url.replace('%20','-'));

