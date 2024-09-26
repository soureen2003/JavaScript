//Stack memory(primitive) and Heap memory(non primitive)

let name = "Soureen"
let anotherName = name 

anotherName = "Rivu"

console.log(name);
console.log(anotherName);
//so in this case when name is declared and the value of it is assigned to anotherName only a copy off value is assigned
//so when we change the value of anotherName the name variable is unchanged.
//and all this things are done in stack memory

let user1 = {
    name: "Soureen",
    email: "soureen@google.com"
}

console.log(user1.name);

let user2 = user1

user2.name = "Rivu"
console.log(user1.name);

/* So in this case we are using object that is a non primitive datatype
when we declare user1 and refer the value to user2 so both have the same value and if we change in one variable another will also be changed
the data inside the object are stored in the heap memory*/