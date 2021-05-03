num = 7;
function fibonacci(num){
    var firstElemnt = 0,secondElement = 1,  temp;

    while (num >= 0){//7 6 5 4
    console.log(firstElemnt);//0 1 1 2
    temp = secondElement;//1 1 2
    secondElement = secondElement + firstElemnt;//1+0=1 1+1=2 2+1=3
    firstElemnt = temp;//1 1 2
    num--;//6 5 4
    
    }

}
fibonacci(num);