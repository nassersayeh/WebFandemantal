var arr = [1,3,-5,7];

function Negatives(){
    for(var i = 1 ; i<arr.length ; i++)
    {
        if(arr[i]<0)
        arr[i]=0;
    }
    return arr;
}
console.log(Negatives());