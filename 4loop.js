
const n=require("readline-sync")
let num=n.question("neter a number tebal:")
let num1=n.question("number a number kaha se kaha thak:")
var i=1
while (i<=num){
    var j=1
    while (j<=num1){
        console.log(j*i)
        j++
    }
    console.log("---------")
    i++
}