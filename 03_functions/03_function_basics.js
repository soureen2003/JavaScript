//There is a slight difference between method and function.
//method is connected with the objects and functions are not, we can create function what ever we needs 

//Now in js inside a function we can pass another function as an argument,then that function is called as a call back function


function abc(){
    console.log("hello");
    
}

function myFunc(abc){
    return abc;
     
}


//forEach loop

let arr = [1,2,3,4,5]

arr.forEach(function printVal(val, idx,arr){
    console.log(val,idx,arr);
    
})