var num = 5;
function factorial(num){
    var mult = 1;
    if(num>0){
    for(var i = 1 ; i<=num ; i++)
    {
        mult*=i;
    }
}
else{
    
}
    return mult;
}
console.log(factorial(num));