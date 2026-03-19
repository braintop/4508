function start(){ 
    let sum = 0;
    for(let i=0;i<=10;i++ ){
        sum = sum + i;
    }//end of the loop
    console.log("The sum is " + sum);
    console.log("The average is " + sum/11);

}

// i   |        i+sum | sum 
// 0   |          0     | 0
// 1   |          1     | 1
//2   |           2     | 3
//3   |           3     | 6
//4   |           4     | 10
