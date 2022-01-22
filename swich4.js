const a=require("readline-sync")
var num1=a.questionInt("enter a number")
var num2=a.questionInt("enter numbetr")
var opr=a.question("enter the opr")
switch (opr){
    case "+":
        result=parseFloat(num1)+parseFloat(num2);
        console.log(`${num1}+${num2}=${result}`)
        break;
    case "-":
        result=parseFloat(num1)-parseFloat(num2);
        console.log(`${num2}-${num1}=${result}`)
        break;
    case "/":
        result=parseFloat(num1)/parseFloat(num2);
        console.log(`${num1}/${num2}=${result}`)
        break;
    case "*":
        result=parseFloat(num1)*parseFloat(num2);
        console.log(`${num2}*${num1}=${result}`)
        break;

    default:
        console.log("nothnig")


}