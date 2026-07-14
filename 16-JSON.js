// De-structuring of object 

// const course = {
//     courseName : "Web Development",
//     coursePrice : 12000,
//     courseInstructor : "Sir Basit"
// }

// console.log(course.courseInstructor); // Sir Basit

// const {courseInstructor : Ins, coursePrice : price} = course

// console.log(courseInstructor); // refrence error : courseInstructor is not defined
// console.log(`Instructor : ${Ins}, Price : ${price}`);

// -----------------------------------------------

// Spread Operator

// const obj1 = {1: "A" , 2 : "B"}
// const obj2 = {3: "C" , 4 : "D"}

// const obj3 = {...obj1 , ...obj2}
// console.log(obj3);

// ------------------------------------------

// Rest Operator

// const RestOpe = (val1 , ...remValues) => {
//     console.log(`Val1 : ${val1}`);
//     console.log(`All values : ${remValues}`);
// }
// RestOpe(5500 , 4000 , 1000 , 302)

// ----------------------------------------------

// Used in React

// const navbar = ({company}) => {
//     console.log(`Company : ${this.company}`);
// }
// navbar(company = "Amazon")      

// --------------------------------------------
// Template literal interpolation object ko string mein implicitly convert karti hai, aur plain object's default string representation [object Object] hoti hai.

// const student = {
//     name: "Ashir",
//     age: 21,
//     skills: ["HTML", "CSS", "JavaScript"]
// };

// // console.log(`object data : ${student}`); // [object , object] ---> type , object kind

// const JsonStudent = JSON.stringify(student)
// console.log(`JSON data : ${JsonStudent}`);
// console.log(typeof JsonStudent);

// ---------------------------------------

// const jsonData = `{
//     "id": 101,
//     "product": "Laptop",
//     "price": 80000
// }`;

// const objData = JSON.parse(jsonData)
// console.log(jsonData);
// console.log(objData);
// console.log(`Product : ${objData.product}`);
// console.log(`Price : ${objData.price}`);

// -----------------------------------------

// Steps:
// Array ko JSON string banao.
// typeof check karo.
// Wapas parse karo.
// Second user's name print karo.

// const users = [
//     {
//         id: 1,
//         name: "Ali"
//     },
//     {
//         id: 2,
//         name: "Ahmed"
//     },
//     {
//         id: 3,
//         name: "Hamza"
//     }
// ];

// const jsonUser = JSON.stringify(users)
// console.log(jsonUser);
// console.log(typeof jsonUser);
// const objUser = JSON.parse(jsonUser)
// console.log(objUser);
// console.log(typeof objUser);
// console.log(objUser[1].name);

// -----------------------------------

