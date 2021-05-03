var arr = [1,-2,3,-4,5,-6];
function negative(arr){
    var newarr = [];
    for(var i = 0 ; i<arr.length ; i++)
    {
        if(arr[i]>0)
        {
            var temp = arr[i]*-1;
            newarr.push(temp);
        }
        else{
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
console.log(negative(arr));