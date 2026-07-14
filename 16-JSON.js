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

const student = {
    name: "Ashir",
    age: 21,
    skills: ["HTML", "CSS", "JavaScript"]
};

console.log(`object : ${student}`);
