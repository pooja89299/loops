const n=require("readline-sync")
var name=n.question("enter the name:")
const store=name;
var string=""
for (let i=name.length-1;i>=0;i--){
string=string+name[i]
}
if (store===string){
console.log(" RADAR it is palindrome")
}
else{
console.log(" RADIX it is not palindrom")
}
