function average_list(numbers){//[1, 20, 37, 4, 5]
    let sum = 0;
    for(let i=0;i<numbers.length;i++){
        sum = sum + numbers[i];
    }
    return sum / numbers.length;
}

let list = [1, 2, 3, 4, 5];
let result = average_list(list);
alert("The average is " + result);

let list2 = [10, 20, 30, 40, 50];
let result2 = average_list(list2);
alert("The average is " + result2);