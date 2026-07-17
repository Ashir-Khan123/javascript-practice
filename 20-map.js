// map() ---> returns/transform a new array 
// condition in return gives boolean output like true or false and same array pass 

// let arr = ["js" , "java" , "cpp" , "py"]

// let result = arr.map((val , i , arr) => {
    // return val , arr ,i // it return only arr because it overrides value and return only last value on RHS
    // console.log(val , i , arr);
// })

// console.log(result);

// -----------------------------------------

// Custom Map

// let languages = [10,20,30]

// function customMap(arr, callback){
//     let newArr = []
//     for(let i = 0 ; i < arr.length ; i++){
//         let result = callback(arr[i])
//         newArr.push(result)
//     }
//     return newArr
// }

// let result = customMap(languages , (v) => {
//     return v * 2
// })

// console.log(result);