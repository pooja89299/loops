// let n = 5;
// let string = "";
// // Pyramid
// for (let i = 1; i <= n; i++) {
//   for (let k = 1; k <= i; k++) {
//     string += k;
//   }
//   string += "\n";
// }
// // Reverse Pyramid
// for (let i = 1; i <= n - 1; i++) {
//   for (let k = 1; k <= n - i; k++) {
//     string += k;
//   }
//   string += "\n";
// }
// console.log(string);








// let n = 5;
// let string = "";
// // Reverse Pyramid
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j < i; j++) {
//     string += " ";
//   }
//   for (let k = 1; k <= 2 * (n - i + 1) - 1; k++) {
//     string += k;
//   }
//   string += "\n";
// }
// // Pyramid
// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 1; j < n - i; j++) {
//     string += " ";
//   }
//   for (let k = 1; k <= 2 * (i + 1) - 1; k++) {
//     string += k;
//   }
//   string += "\n";
// }
// console.log(string);