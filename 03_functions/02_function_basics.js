// function countVowels(str){
//     let count = 0;

//     for(const ch of str){
//         //console.log(i)
//         if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels("apna college"))

// in the above code the function is used to count the vowel in a word.


//now doing the same task by using arrow function


const countVow = (str)=>{
    let count = 0;
    for(const ch of str){
        if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ){
            count++;
        }
    }
    console.log(count)

}

countVow("apna college")