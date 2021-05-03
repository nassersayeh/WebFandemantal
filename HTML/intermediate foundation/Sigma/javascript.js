var num = 5;
function sigma(num){
    var sum = 0;
    if(num>0){
    for(var i = 0 ; i<=num ; i++)
    {
        sum+=i;
    }
}
else{
    
}
    return sum;
}
console.log(sigma(num));