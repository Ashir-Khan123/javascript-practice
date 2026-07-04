// let date = new Date()
// console.log(date.toDateString()); // Sat Jul 04 2026 (Human readable)
// console.log(date.toJSON()); // 2026-07-04T10:55:13.308Z ()
// console.log(date.toISOString()); // 2026-07-04T10:53:59.925Z
// console.log(typeof date); // object
// ---------------------------------
// toJSON & toISOString is same (Mostly APIs aur databases mein use hota hai.)
// ---------------------------------

// console.log(date.toLocaleDateString()); // 04/07/2026 (User locale format)

// ----------------------------------------

// let date = new Date("2025-1-12")
// console.log(date); // Sun Jan 12 2025 00:00:00 GMT+0500 (Pakistan Standard Time)

// ----------------------------------------

// let currentDate = Date.now()
// console.log(currentDate);

// console.log(date.getDay()); // 0 --> sunday
// console.log(date.getFullYear()); // 2025 

// =================================================

// let currentDay = new Date()
// console.log(`today is ${currentDay.getDay()}`);

// ================================================

// let currentTime = new Date()
// console.log(currentTime.toLocaleString());

// ==============================================

// let date = new Date()
// let currentDate = date.getDate();
// let currentMonth =  date.getMonth() + 1;
// let currentYear = date.getFullYear();
// console.log(`${currentDate}/${currentMonth}/${currentYear}`);