// filter 

// condition in return of callback gives "just only" correct value in new array 
// It checks original value.. if falsy value so remove origina vaue and if truthy value so return original value in new array 

// let numbers = [10,20,30];

// let ans = numbers.filter((v)=>{
//     return v > 15;
// });

// console.log(ans);

// ------------------------------

// let num = [10,20,30]

// function customFilter(arr, callback){
//     let newArr = []
//     for(let i = 0 ; i < arr.length ; i++){
//         let result = callback(arr[i])
//         if(result == true){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// let result = customFilter(num , (v) => {
//     return v > 15
// })

// console.log(result);