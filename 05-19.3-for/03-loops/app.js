function start(){ 
    for(let i=0;i<10;i=i+2 ){
        console.log(i);// 0, 1, 2 
    }//end of the loop
    console.log("End of the loop");

    // i=i+2 is the same as i+=2
    for(let i=0;i<10;i+=2 ){
        console.log(i);// 0, 1, 2 
    }//end of the loop

}