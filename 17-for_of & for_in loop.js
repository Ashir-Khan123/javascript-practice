// for-of -------------> Give values

// let users = [
//     {
//         name: "Ali",
//         city: "Karachi"
//     },
//     {
//         name: "Ahmed",
//         city: "Lahore"
//     },
//     {
//         name: "Hamza",
//         city: "Islamabad"
//     }
// ];

// for(let value of users){
//     console.log(value);
// }

// for(let key in users){
//     console.log(key);
// }

// ---------------------------------
// For-in loop -> give keys/properties

// let user = {
//     name: "Ashir",
//     age: 21
// };

// for(let value of user){
//     console.log(value); // type error
// }

// for(let key in user){
//     // console.log(user.key); // undefined
//     console.log(user[key]);
// }

// ----------------------------------

// For-of task

// let departments = [
//     {
//         department: "Frontend",
//         employees: [
//             {
//                 name: "Ali",
//                 salary: 50000
//             },
//             {
//                 name: "Ahmed",
//                 salary: 70000
//             }
//         ]
//     },
//     {
//         department: "Backend",
//         employees: [
//             {
//                 name: "Hamza",
//                 salary: 80000
//             },
//             {
//                 name: "Usman",
//                 salary: 60000
//             }
//         ]
//     }
// ];

// for(let val of departments){
// let dept
// let name
// let salary  
//     dept = val.department
//     console.log(`Department : ${dept}`);
//     for(let value of val.employees){
//         name = value.name
//         salary = value.salary
//         console.log(`${name} - ${salary}`);
//     }
//     console.log(`-----------------------------`);
// }

// --------------------------------------------

// For-in taks

// let product = {
//     id : 101,
//     name: "Laptop",
//     price: 80000,
//     quantity: 2,
//     rating: 4.5,
//     brand: "Dell"
// };

// let count = 0
// for(let key in product){
//     if(typeof product[key] == 'number'){
//         count += 1
//     }
// }
// console.log(`${count} numeric values`);

