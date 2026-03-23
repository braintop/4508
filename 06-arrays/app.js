let arr = [83, 92, 78, 88, 95];
console.log(arr);
//accessing the elements of the array
console.log(arr[0]);//83
console.log(arr[1]);//92
console.log(arr[2]);//78
console.log(arr[3]);//88
console.log(arr[4]);//95

let grades = [];
for(let i=0;i<5;i++){
    grades[i] = +prompt("Enter grade " + i);
}
console.log(grades);


for(let i=0;i<5;i++){
    let grade = +prompt("Enter grade " + i);
    grades.push(grade);
}
console.log(grades);