// var i =156;
// while (i<166){
// console.log(i-155);
// i+=1
// }







// for (i=156;i<166;i++){
//     console.log(i-155)
// }




// var i=1
// while (i<=5){
//     console.log(i*2)
//     i++
// }






// let n=require("readline-sync");

// let choose_ascii=(n.question("enter number: "));

// var ascii_char=97+choose_ascii

// for (var i=97;i<=ascii_char;i++) {

//     console.log(i);

// }







// let n=1
// let string=""

// for (var  i=5;i>=n;i--){
//     for (var  j=5;j>=n;j--){
//         string+=i;
//     }
//     string+="\n";
// }
// console.log(string)







// let n=1
// let string=""
// var i=5
// while (i>=n){
//     var j=5
//     while (j>=n){
//         string+=i
//         j--
//     }
//     string+="\n"
//     i--
// }
// console.log(string)




// let c=require("readline-sync");

// let loop_time=c.question("enter loop time: ");
// var maxi=0;

// let lis=[]

// for (let i=1;i<=loop_time;i++) {

//    let num=c.question("enter number: ")

//    lis.push(num)

// }

// var maxi=lis[0];

// for (let j=0;j<lis.length;j++) {

//    if (maxi<lis[j]) {

//        [maxi=lis[j]]

//   } 

// }
// console.log(maxi)












// let c=require("readline-sync");
// let loop_time=c.question("enter loop time: ");
// var maxi=0;
// let lis=[ ]
// for (let i=1;i<=loop_time;i++) {
// let num=c.question("enter number: ")
// lis.push(num)
// }
// var maxi=lis[0];
// for (let j=0;j<lis.length;j++) {
// if (maxi<lis[j]) {
// [maxi=lis[j]]
// }
// }
// console.log(maxi)






// const num=require("readline-sync")
// var a=num.questionInt("enter a number1:")
// var b=num.questionInt("enter a number 2:")
// var c=num.questionInt("enter a number 3:")
// if (a>b && b<c){
//     console.log(a)
// }else if (a<c && b>c){
//     console.log(b)
// }else{
//     console.log(c)
// }






// result = '3' + 2; 
// console.log(result) // "32"









// result = '3' + true; 
// console.log(result); // "3true"

// result = '3' + undefined; 
// console.log(result); // "3undefined"

// result = '3' + null; 
// console.log(result); // "3null"







// let result;

// result = '4' - '2'; 
// console.log(result); // 2

// result = '4' - 2;
// console.log(result); // 2

// result = '4' * 2;
// console.log(result); // 8

// result = '4' / 2;
// console.log(result); // 2








// # a=int(input("enter a number:1"))
// # b=int(input("enter a number2:"))
// # c=int(input("enter a number3:"))
// # if a>b and b<c:
// #     print(a)
// # elif a<c and b>c:
// #     print(b)
// # else:
// #     print(c)


// var n=require("readline-sync")
// var a=n.questionInt("enter a number:1")
// var b=n.questionInt("enter a number:2")
// var c=n.questionInt("enter a number:3")
// if (a>b && b<c){
//     console.log(a)
// }else if (a<c && b>c){
//     console.log(b)
// }else{
//     console.log(c)
// }








// // let result;

// let a= 9 - 4;
// console.log(a); // NaN

// a = 4 - 2;
// console.log(a); // NaN






// if boolean is used, true is 1, false is 0

// let result;

// result = '4' - true;
// console.log(result); // 3

// result = 4 + true;
// console.log(result); // 5

// result = 4 + false;
// console.log(result); // 4






// var num=5
// var fact=1
// for (var i=num; i>=1;i--){
//     fact=fact*i
// }
// console.log(fact)




// var num=5
// var fact=1
// for (var i=1; i<=num; i++){
//     fact=fact*i
// }
// console.log(fact)



// var num=1
// var count=0
// var i=2
// while (i<num){
//     if (2%i==0){
//         count=count+1
//     }
//     if (num==0){
//         console.log("it is prime number",i)
//     }else{
//         console.log("it is not prime number",i)
//     }
//     i++
// }
// console.log(num)






// // enter name: kumar and tell us the what is the output will come
// const n=require("readline-sync");
// var name=n.question("enter name: ")
// const store=name;
// var string=""
// for (let i=name.length-1;i>=0;i--) {
// string=string+name[i]
// }
// if (store===string) {
// console.log("its palindrome string")
// }
// else {
// console.log("it's not a palindrome string")
// }











// // take input 3 and find out the ouput by following the code line by line
// var n=require("readline-sync");
// const num=n.question("enter number: ");
// let i=2
// var count=0;
// while (num%i===0) {
// count=count+1
// }
// i++;
// if (count===0) {
// console.log("prime number")
// }
// else {
// console.log("not prime number")
// }// enter name: kumar and tell us the what is the output will come
// const n=require("readline-sync");
// var name=n.question("enter name: ")
// const store=name;
// var string=""
// for (let i=name.length-1;i>=0;i--) {
// string=string+name[i]
// }
// if (store===string) {
// console.log("its palindrome string")
// }
// else {
// console.log("it's not a palindrome string")
// }








// var n=5
// var string=""
// for (var i=1;i<=n;i++){
//     for (var j=1;j<=n-i;j++){
//         string+=""
//     }
//     for (var k=0;k<2*i-1;k++){
//         string+="*"
//     }
//     string+="\n"
// }
// console.log(string)




// var n=5
// var string=""
// var i=1
// while (i<=n){
//     var j=1
//     while (j<=n){
//         string+=""
//         j++
//     }
//     var k=0
//     while (k<2*i-1){
//         string+="*"
//         k++
//     }
//     string+="\n"
//     i++
// }
// console.log(string)











// let n = 5;
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing characters
//   for (let j = 0; j < i; j++) {
//     string += String.fromCharCode((i - 1) + 65);
//   }
//   string += "\n";
// }
// console.log(string)



// var n=5
// var string=""
// var i=1
// while (i<=n){
//     var j=0
//     while (j<i){
//         string+=String.fromCharCode((i-1)+65)
//         j++
//     }
//     string+="\n"
//     i++
// }
// console.log(string)













// let n = 5; // you can take input from prompt or change the value
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing characters
//   for (let j = 0; j < i; j++) {
//     string += String.fromCharCode(j + 65);
//   }
//   string += "\n";
// }
// console.log(string);



// const a=require("readline-sync")
// var num=a.questionInt("enter a number::")
// var string=""
// var i=1
// while (i<=num){
//     var j=0
//     while (j<i){
//         string += String.fromCharCode(j+65)
//         j++
//     }
//     string+="\n"
//     i++
// }
// console.log(string)








// let n = 5; // you can take input using prompt or change the value
// let string = "";
// let count = 0;
// // External loop
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += String.fromCharCode(count + 65);
//     count++; // increment cause next alphabet
//   }
//   string += "\n";
// }
// console.log(string);










// let n = 5; // you can take input using prompt or change the value
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i + 1; j++) {
//     string += String.fromCharCode(j + 65);
//   }
//   string += "\n";
// }
// console.log(string);






var n=5
var string=""
var i=1
while (i<=n){
    var j=0
    while (j<n-i+1){
        string+=String.fromCharCode(j+65)
        j++
    }
    string+="\n"
    i++
}
console.log(string)







// let n = 5; // you can take input using prompt or change the value
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i + 1; j++) {
//     string += String.fromCharCode((n - 1 - j) + 65);
//   }
//   string += "\n";
// }
// console.log(string);











// let n = 5; // you can take input using prompt or change the value
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i + 1; j++) {
//     string += String.fromCharCode((n - i - j) + 65);
//   }
//   string += "\n";
// }
// console.log(string);








// let n = 5;
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // creating spaces
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   // creating alphabets
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += String.fromCharCode(k + 65);
//   }
//   string += "\n";
// }
// console.log(string);