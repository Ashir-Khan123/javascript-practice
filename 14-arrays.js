// Array 

// const myArr = [1,2,3,4,5]
// console.log(myArr[0]); // 1

// const strArr = ["Ashir", "shakir" ,"suhail", "hamza", "Ahmed"]
// // console.log(strArr);
// let pushArr = strArr.push("zain", "abbas")
// console.log(pushArr); // return length of array   
// console.log(strArr.pop()); // return remove element 
// console.log(strArr.unshift("ghufran")); // 7
// console.log(strArr); // (7) ['ghufran', 'Ashir', 'shakir', 'suhail', 'hamza', 'Ahmed', 'zain']
// console.log(strArr.shift()); // ghufran
// console.log(strArr); // (6) ['Ashir', 'shakir', 'suhail', 'hamza', 'Ahmed', 'zain'

// console.log(strArr.includes("shakir")); // true
// console.log(strArr.indexOf("suhail")); // 2
// console.log(strArr[5]); // undefined

// const newArr = strArr.join()
// console.log(newArr);

// const strArr = ["Ashir", "shakir" ,"suhail", "hamza", "Ahmed"]

// console.log(strArr);
// console.log(strArr.slice(1, 4)); // slice till -1 and copy of an original array 
// console.log(strArr.splice(1,3)); // refrence of original array return remove elements ['shakir', 'suhail', 'hamza']
// console.log(strArr); // ['Ashir', 'Ahmed'] 
// ----------------------------------------------------------------
// const strArr1 = ["Ashir", "shakir" ,"suhail", "hamza", "Ahmed"]
// const strArr2 = ["Ghufran" , "hashir" , "haseeb" , "taha"]

// strArr1.push(strArr2)
// console.log(strArr1);

// let combineArr = strArr1.concat(strArr2) // return new array
// console.log(combineArr);

// ==============================================

// Spread operator
// let newArr = [...strArr1 , ...strArr2]
// console.log(newArr);

// ==========================================

// let arr = [1,2,3,[2,5], 6,5, [3,[4,5,2],6],9,2,1]
// let oneArr = arr.flat(Infinity) // nested arr in one line 
// console.log(oneArr);

// console.log(Array.isArray("Ashir")); // false
// console.log(Array.isArray(["Ashir"])); // true
// console.log(Array.from("Ashir")); // (5) ['A', 's', 'h', 'i', 'r']
// console.log(Array.of("Ashir")); // ['Ashir']

// console.log(Array.from({name : "Ashir"})); // []
// console.log(Array.of({name : "Ashir"})); // [{name : "Ashir"}]

// -------------------------------------------------------

// let arr = [10,20,30,40,50];
// let sum = 0
// for(let i = 0 ; i < arr.length ; i++){
//     sum += arr[i]
// }
// console.log(sum);

// console.log(`Average : ${sum / arr.length}`);


// -----------------------------------------------

// largest Number
// ================

// let arr = [12,45,2,90,56,78]
// let largest = 0
// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] > largest){
//         largest = arr[i]
//     }
// }
// console.log(largest); // 90

// Smallest Number
// =================

// let arr = [12,45,2,90,56,78]
// let Smallest = arr[0]
// for(let i = 1 ; i < arr.length ; i++){
//     if(Smallest > arr[i]){
//         Smallest = arr[i]
//     }
// }
// console.log(Smallest); // 2

// Second largest number
// ========================

// let arr = [12,45,90,2,78,84,56]
// let largest = 0
// let secondLargest = 0
// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] > largest){
//         secondLargest = largest 
//         largest = arr[i] 
//     }
//     else if(arr[i] > secondLargest && secondLargest < largest){
//         secondLargest = arr[i]
//     }
// }
// console.log(largest);
// console.log(secondLargest);

// Second smallest number 
// =========================

// let arr = [112,82,2,90,26,78,3]
// let Smallest = arr[0]
// let secondSmallest = 0
// for(let i = 1 ; i < arr.length ; i++){
//     if(Smallest > arr[i]){
//         secondSmallest = Smallest // 82
//         Smallest = arr[i] // 2
//     }
//     else if(secondSmallest > arr[i] && arr[i] > Smallest){
//         secondSmallest = arr[i]
//     }
// }
// console.log(Smallest);
// console.log(secondSmallest);

// count even numbers
// =======================

// let arr = [2,5,8,7,10,13,22,19,4]
// let countEven = 0
// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] % 2 == 0){
//         countEven += 1
//     }
// }
// console.log(`Even numbers : ${countEven}`);

// count odd numbers
// ===========================

// let arr = [2,5,8,7,10,13,22,19,4]
// let countOdd = 0
// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] % 2 != 0){
//         countOdd += 1
//     }
// }
// console.log(`Odd numbers : ${countOdd}`);

//  Max Min number
// ===================
// let max_min = [3,-1,6,99,75,39,101,-11,33]

// let maxNum = 0
// let minNum = 0

// for(let i = 0 ; i < max_min.length ; i++){
//     if(max_min[i] > maxNum){
//         maxNum = max_min[i]
//     }

//     if(minNum > max_min[i]){
//         minNum = max_min[i]
//     }
// }
// console.log(`Max number : ${maxNum}`);
// console.log(`Min number : ${minNum}`);

// Reverse Array 
// =================

// let arr = [1,2,3,4,5,6]
// let newArr = []
// for(let i = 0 ; i < arr.length ; i++){
//         newArr.push(arr[arr.length - 1 - i])
// }
// console.log(`Original array : ${arr}`);
// console.log(`Reverse array : ${newArr}`);

// Swap First and Last Element
// =========================

// let arr = [10,20,30,40,50]

// let num1 = arr[0]
// let num2 = arr[arr.length - 1]

// arr[0] = num2
// arr[arr.length - 1] = num1

// console.log(arr);

// ========================

// let arr = [1,0,3,0,5,0,8]
// let last 
// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] == 0){
//         console.log(arr[i]);
//         // arr.push(arr[i])
//     }
// }
// console.log(arr);


