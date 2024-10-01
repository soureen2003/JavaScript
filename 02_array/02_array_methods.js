//array methods

//push() method - add element at the last of the array

let foodItems = ["banana","apple","pineapple"]
    console.log(foodItems);
    foodItems.push("nut")
    console.log(foodItems);
    

//pop() method is use to delete  items from the last

foodItems.pop();
console.log(foodItems);
let deletedItem = foodItems.pop();
console.log(deletedItem);
console.log(foodItems);


//toString () method is use to convert  an array to string

console.log(foodItems.toString());
//this creates a new string and did not change the original array


//concat()

let marvelHeroes = ["iron man","ant man","captain","thor"]

let dcHeroes = ["super man","bat man"];

let heroes = marvelHeroes.concat(dcHeroes);
console.log(heroes);

//unshift() method is use to add some element at the starting of the array
marvelHeroes.unshift("spidy")
console.log(marvelHeroes);


//shift() method is use to delete the 1st element

let val = marvelHeroes.shift();
console.log("deleted",val);


//slice() method does not change an array it makes a part of the original array
//slice(starting index, ending index)


//splice() method change the original array

//splice(starting index,no of deleted items,replace with new items)

let arr = [1,2,3,4,5,6,7]
console.log(arr);

arr.splice(2,2,101,102)
console.log(arr);
