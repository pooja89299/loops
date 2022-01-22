// var sum=0
// var i=1
// while (i<=10){
//     const n=require("readline-sync")
//     let num=n.questionInt("enter the number:")
//     sum=sum+num
//     i++
// }
// console.log(sum,"total")





// Create a loop that 
// takes 10 numbers as
// input from the user.
// After taking the input console
// the sum of all those numbers.
// This program will go
// like this. Each 
// time using readline-sync will 
// take a number input from the user.

const input=require("readline-sync");
var sum=0
for (var i=0;i<5; i++ ){
    var number=input.questionInt("Enter the number:")
        sum=sum+number
    
};
console.log("total sum",sum)
