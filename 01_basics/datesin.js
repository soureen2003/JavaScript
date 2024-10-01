// //dates 

// let myDate = new Date();
// //console.log(myDate);
// console.log(myDate.toString());//Tue Oct 01 2024 09:40:52 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Tue Oct 01 2024
// console.log(myDate.toISOString()); //2024-10-01T09:40:52.028Z
// console.log(myDate.toLocaleDateString()) // 10/1/2024

// console.log(myDate.toLocaleString()); //10/1/2024, 9:43:58 AM


// //Date is a object

// console.log(typeof myDate);


// let myCreatedDate = new Date(2023,0,23)
//console.log(myCreatedDate.toDateString());
 //so months in javaScript starts from 0

 //let myCreatedDate = new Date("06-20-2003")
 //console.log(myCreatedDate.toDateString());
 
// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());


let newDate = new Date()
    console.log(newDate.getMonth());
    

newDate.toLocaleString('default',{
    weekday: "long",
})