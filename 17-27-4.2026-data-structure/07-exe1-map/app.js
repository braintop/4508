let arr1 = [1, 2, 3];
let arr2 = arr1;//reference to the same array
arr2.push(4);
console.log(arr1);//[1, 2, 3, 4]
console.log(arr2);//[1, 2, 3, 4]

arr1.push(5);
let arr3 =[];
//copy the array by value or clone
for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i]);
}

console.log(arr3);
arr3.push(5);
console.log(arr3);
console.log(arr1);

let arr4 = [...arr1];//copy the array by value or clone - lines 8 - 12 



arr4.push(6);