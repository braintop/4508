let names = ["John", "Jane", "Jim", "Jill","Jack"];
let str = names.join("*");
console.log(str);//John*Jane*Jim*Jill

let arr = str.split("*");
console.log(arr);//["John", "Jane", "Jim", "Jill"]

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
for(let i=4;i>=0;i--){
    console.log(arr[i]);
}

