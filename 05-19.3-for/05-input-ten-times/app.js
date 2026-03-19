function start(){ 
    let sum = 0;
    for(let i=1;i<=5;i++ ){
        let num = +prompt("Enter grade " + i);
        sum = sum + num;
    }//end of the loop
    console.log("The sum is " + sum);
    //alert("The average is " + sum/10);
    let average = sum/5;
    document.getElementById("result").innerHTML = "The average is " + average;
    if(average >= 90){
        document.getElementById("result").style.color = "green";
    }
    else if(average >= 70){
        document.getElementById("result").style.color = "yellow";
    }
    else{
        document.getElementById("result").style.color = "red";
    }

}

// i   |        i+sum | sum 
// 0   |          0     | 0
// 1   |          1     | 1
//2   |           2     | 3
//3   |           3     | 6
//4   |           4     | 10
