
const max=[56,89,5,39,6,70,99,10]
var sec=0
for (i in max){
    if(sec<max[i]){
        sec=max[i]
    }
}
// console.log(sec)
var second = 0;
for (i in max){
    if(second<max[i]&&max[i]<sec){
        second=max[i];
    };
}console.log(second);



