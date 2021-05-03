

function double(arr){
    
    var newarr = [];
    for(var i = 0 ; i<arr.length ; i++)
    {
        arr[i]*=arr[i];
        newarr.push(arr[i]);
    }
    return newarr;
}
var arr =[1,2,3];
console.log(double(arr));