// let firstname = "Ashir"
// let lastname = "khan"
// console.log("My name is " + firstname + lastname ); // string concatenation
// console.log(`My name is ${firstname} ${lastname}`); // string interpolation / template literals
// console.log(`My name is ${firstname , lastname}`); // My name is khan (override)

const uniName = "Sindh Madressatul Islam University"

// console.log(uniName.length); //34
// ----------------------------------------
// console.log(uniName.toUpperCase()); // SINDH MADRESSATUL ISLAM UNIVERSITY
// ----------------------------------------------------------------------
// console.log(uniName.charAt(22)); // m
// ----------------------------------------
// console.log(uniName.indexOf('i'));// 6
// ------------------------------------------
// console.log(uniName.lastIndexOf('i'));// 31
// -----------------------------------------------
// console.log(uniName.substring(18,23)); // Islam
// ------------------------------------------------
// console.log(uniName.slice(-12, -5)); // m Unive
// ------------------------------------------------
// console.log(uniName.slice(2, -5)); // m Unive
// ------------------------------------------------
// console.log(uniName.replace("Madressatul" , "Madarsatul")); // Sindh Madarsatul Islam University
// --------------------------------------------
// console.log(uniName.trim()); // white space khtm
// ---------------------------------------------------
// console.log(uniName.split("")); // Each character in array
// ----------------------------------------------------------
// console.log(uniName.split(" ")); // ['Sindh', 'Madressatul', 'Islam', 'University']
// ----------------------------------------------------------------------------------
// console.log(uniName.includes("Islam")); //  true  // return in Boolean(true/false)
// ---------------------------------------------------------------------------
// console.log(uniName.includes("IslAm")); //  false  // return in Boolean(true/false)
// -------------------------------------------------------------------------

// ------------------------------------------
//    TASKS
// ------------------------------------------

// let fullname = "   Ashir khan   "

// let afterTrim = fullname.trim()
// console.log(afterTrim);
// console.log(afterTrim.toUpperCase());
// console.log(afterTrim.length);

// --------------------------------------------

// let email = "ashirkhan@gmail.com"
// let validate = email.includes("@gmail.com")
// if(validate){
//     console.log(`Valid`);
// }
// else{
//     console.log(`invalid`);
// }

// ----------------------------------------------------

// let sentence = "JavaScript is awesome"
// console.log(sentence.replace("awesome" , "powerful"));

// ----------------------------------------------------

// let university = "Sindh Madressatul Islam University"

// console.log(university.charAt(0));
// console.log(university.charAt(university.length - 1));
// console.log(university.length);
// console.log(university.substring(0, 5));

// ----------------------------------------------------

// let fullName = "Ashir Khan"
// let split = fullName.split(" ")
// console.log(split);
// console.log(`${split[0][0]}.${split[1][0]}`);