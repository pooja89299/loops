// let n = 5;
// let string = "";
// let count = 0;
// // External loop
// for (let i = 1; i <= n; i++) {
//   // creating spaces
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   // creating alphabets
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += String.fromCharCode(count + 65);
//     count++;
//   }
//   string += "\n";
// }
// console.log(string);




// var n=5
// var string=""
// var c=0
// var i=1
// while(i<=n){
//     var j=0
//     while(j<n-i){
//         string+=" "
//         j++
//     }
//     var k=0
//     while(k<2*i-1){
//         string+=String.fromCharCode(c+65)
//         k++
//         c++
//     }
//     string+="\n"
//     i++
// }
// console.log(string)




// let n = 5;
// let string = "";
// // Pyramid
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j < n - i + 1; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += String.fromCharCode(k + 65);
//   }
//   string += "\n";
// }
// // Reverse Pyramid
// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 1; j < i + 1; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * (n - i) - 1; k++) {
//     string += String.fromCharCode(k + 65);
//   }
//   string += "\n";
// }
// console.log(string);





var n=5
var string=""
var i=1
while (i<=n){
    var j=1
    while(j<n-i+1){
        string+=" "
        j++
    }
    var k=0
    while(k<2*i-1){
        string+=String.fromCharCode(k+65)
    }
    string+="\n"
    k++
}