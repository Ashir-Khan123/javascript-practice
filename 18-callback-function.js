
// Higher-Order Function:
// A function that takes another function as an argument
// OR returns a function.

// function sum(a, b , cb){
//     let result = a + b
//     cb(result)
// } 

// Callback Function:
// A function passed as an argument to another function
// and executed/called by that function.
// (func name not written in callback)

// sum(3 , 7 , output)
// sum(23 , 17 , output)

// function output(res){
//     console.log(`callback : ${res}`);
// }

// -----------------------------------

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

// ---------------------------------------

// map() ---> returns/transform a new array 

// let result = arr.map((val) => {
    // return val
    // console.log(val);
// })

// console.log(result);

// -----------------------------------------

let languages = [10,20,30]

function customMap(arr, callback){
    let newArr = []
    for(let i = 0 ; i < arr.length ; i++){
        let result = callback(arr[i])
        newArr.push(result)
    }
    return newArr
}

let result = customMap(languages , (v) => {
    return v * 2
})

console.log(result);











