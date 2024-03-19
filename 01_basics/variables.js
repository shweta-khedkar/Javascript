
const a=10;//value cannot be changed
let b=20;// Scoping problem resolved
var c;// Scoping problem is here
function strOp(){
    str="shweta"// not good practice
}
strOp();
b="sk";
c=40;

console.table([a,b,c,str]);
