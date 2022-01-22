// const a=require("readline-sync")
// var day=a.question("Enter the days:")
// switch (day){
//     case "sunday":
//         console.log("Meeting with curriculum team")
//         break;
//     case "wednesday":
//         console.log("Meeting with academics team")
//         break;
//     case "tuesday":
//         console.log("Normal working day")
//         break;
//     default:
//         console.log("invalid input")
// }




// var myName="kumar"
// console.log({...myName})







// Node.js program to demonstrate the
// fs.writeFileSync() method
  
// // Import the filesystem module
// const fs = require('fs');
  
// // Writing to the file 5 times
// // with the append file mode
// for (let i = 0; i < 5; i++) {
//   fs.writeFileSync("movies.txt",
//     "Movie " + i + "\n",
//     {
//       encoding: "utf8",
//       flag: "a+",
//       mode: 0o666
//     });
// }
  
// console.log("File written successfully 5 times\n");
// console.log("The written file has the following contents:");
// console.log(fs.readFileSync("movies.txt", "utf8"));






// function recurse(name) {
//   console.log(name)
//   if(name=="pooja") {
//       recurse();
//   }
//   else {
//       // stop calling recurse()
//   }
// }

// recurse(4);








// // program to count down numbers to 1
// function countDown(number) {

//   // display the number
//   console.log(number);

//   // decrease the number value
//   const newNumber = number - 1;

//   // base case
//   if (newNumber > 0) {
//       countDown(newNumber);
//   }
// }

// countDown(4);
















// // program to find the factorial of a number
// function factorial(x) {

//   // if number is 0
//   if (x === 0) {
//       return 1;
//   }

//   // if number is positive
//   else {
//       return x * factorial(x - 1);
//   }
// }

// const num = 3;

// // calling factorial() if num is non-negative
// if (num > 0) {
//   let result = factorial(num);
//   console.log(`The factorial of ${num} is ${result}`);
// }





// // program to display value
// a = 5;
// console.log(a);
// var a; // 5






// // program to display value
// var a = 4;

// function greet() {
//     b = 'hello';
//     console.log(b); // hello
//     // var b;
// }

// greet(); // hello
// console.log(b);  





// // program to print the text
// greet();

// function greet() {
//     console.log('Hi, there.');
// }





// // program to print the text
// greet();

// function greet () {
//     console.log('Hi, there.');
// }