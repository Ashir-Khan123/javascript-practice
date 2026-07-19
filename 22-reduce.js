// Reduce 

// const nums = [1 , 2 , 3]
// let res = nums.reduce( function(acc , currVal){
    //     console.log(`acc : ${acc}, curr : ${currVal}`);
    //     return acc + currVal
    // } , 0 )
    
    // console.log(res);
    
// let result = nums.reduce((acc , currVal) => acc + currVal , 0) // accumulator stores answer of each expression
// console.log(result);

// const shoppingCart = [
//     {
//         courseName : "JS Course",
//         Price : 2999
//     },
//     {
//         courseName : "pS Course",
//         Price : 999
//     },
//     {
//         courseName : "Mobile dev Course",
//         Price : 5999
//     },
//     {
//         courseName : "Data Science Course",
//         Price : 12999
//     },
// ]

// let totalAmount = shoppingCart.reduce((acc , currVal) => acc + currVal.Price , 0)
// console.log(`Total Amount : ${totalAmount}`);

// const nums = [5, 20, 10, 15];

// let res = nums.reduce((acc , val) => {
//     if(val > acc){
//         acc = val
//     }
//     return acc
// } , 0) // if 0 not give so acc suppose 1st value of array 

// console.log(`Largest number : ${res}`);

// ------------------------------------

// const nums = [-5, -20, -10];

// let res = nums.reduce((acc, val) => {
//     console.log(acc , val);
//     return val > acc ? val : acc;
// });

// console.log(res);

// ------------------------------

// const users = [
//     { city: "Karachi" },
//     { city: "Lahore" },
//     { city: "Karachi" },
//     { city: "Islamabad" },
//     { city: "Karachi" }
// ];

// let result = users.reduce((acc , val) => {
//     val = val.city
//     if(acc[val] == undefined){
//         acc[val] = 1
//     }
//     else{
//         acc[val] += 1
//     }
//     return acc
// } , {})

// console.log(result);

// -------------------------------------

// customReduce

// let nums = [ 1 , 2 , 4 , 5 , 6]

// function customReduce(arr , cb , initialVal){
//     let acc = initialVal
//     for(let i = 0 ; i < arr.length ; i++){
//         let val = arr[i]
//         acc = cb(acc , val)
//     }
//     return acc
// }

// let result = customReduce(nums , (acc, val) => {
//     return acc + val
// }, 0)

// console.log(`Result : ${result}`);
