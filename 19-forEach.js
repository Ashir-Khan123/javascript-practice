// For each loop 
// It not return new array, its return value is undefined 

// const languages = ["js" , "py" , "java" , "c"]

// const result = languages.forEach((value) => {
//     return value
//     // console.log(value);
// })

// console.log(result) // undefined

// languages.forEach(function(v){console.log(v)}); // This is callback function in forEach loop

// console.log(languages.forEach()) // TypeError : undefined is not a function 

// languages.forEach((v ,i , arr) => console.log(i,arr,v)) // value , index , array

// let greet = (item) => {
    //     console.log(`Item : ${item}`);
    // }
    
    // languages.forEach(greet)

// function greet(item){
//     console.log(`Item : ${item}`);
// }


// ---------------------------------------------

// custom for each

// const languages = ["js" , "py" , "java" , "c"]

// function customForEach(arr, callback){

//     for(let i = 0 ; i < arr.length ; i++){
//         callback(arr[i] , i , arr)
//     }
// }

// customForEach(languages, (v , i , arr) => console.log(v , i , arr))

// -----------------------------------------------

// let arr = ["js" , "py" , "java" , "cpp"]

// forEach return undefined

// let result = arr.forEach((val) => {
//     return val
//     console.log(val);
// })

// console.log(result);