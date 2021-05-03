var arr = [1,3,5,7];

function greater(){
    for(var i = 1 ; i<arr.length ; i++)
    {
        arr[i]*=arr[i];
    }
    return arr;
}
console.log(greater());