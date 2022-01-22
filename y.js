
// num=int(input("enter a nummber"))
// a=num//10
// b=a%10
// print(b)
// if b==3:
//     print("yes")
// else:
//     print("no")



// const num=require("readline-sync")
// var num1=num.questionInt("enter a number")
// var a=Math.floor(num1/10)
// var b=a%10
// console.log(b)
// if (b==3){
//     console.log("yes")
// }
// else{
//     console.log("no")
// }

// const a=require("readline-sync")
// var num=a.questionInt("enter a number")
// var n=Math.floor(num/10)
// var i=n%10



// const num=require("readline-sync")
// var num1=num.questionInt("enter a number")
// var a=Math.floor(num1/10)
// var b=a%10
// console.log(b)
// switch (true){
//     case (b==3):
//         console.log("Yes")
//         break;

//     default:
//         console.log("No")
// }







// const c=require("readline-sync")
// var mast=c.question("enter a marst:")
// switch (mast) {
//    case 'A': console.log ("Good job");
//    break;

//    case 'B':
//        console.log("Pretty good");
//    break;

//    case 'C':
//        console.log("Passed");
//    break;

// //    case 'D':
// //        console.log("Not so good");
// //    break;

// //    case 'F':
// //        console.log("Failed");
// //    break;

// //    default: 
   
// //     console.log ("Unknown grade")
// // }










// var n=5
// var string=""
// var i=0
// while (i<n){
//     var j=0
//     while (j<n){
//         string+="*"
//         j++
//     }
//     string+="\n"
//     i++
// }
// console.log(string)






// var n=5
// var string=""
// for (i=1;i<n;i++){
//     for (j=1;j<=n-i+1;j++){
//         string+=j
//     }
//     string+="\n"
// }
// console.log(string)











// const n=require("readline-sync")
// var num=n.questionInt("enter a number")
// if (num=="-"){
//     console.log(num)
// }else{
//     console.log(-num)
// }


// calculator

const a=require("readline-sync")
var num1=a.questionInt("enter a number ")
var num2=a.questionInt("enter a number")
var opr=a.question("enter a opreator")
switch(opr){
    case "+":
        console.log(num1+num2)
        break;
    case "-":
        console.log(num1-num2)
        break;
    case "*":
        console.log(num1*num2)
        break;
    


}












