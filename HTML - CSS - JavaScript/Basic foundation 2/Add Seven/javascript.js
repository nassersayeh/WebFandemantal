var arr = [1,3,5,6];
var newarr = [];
function addseven(arr){
    for(var i = 0 ; i<arr.length ; i++)
    {
        newarr.push(arr[i]+=7);
    }
    return newarr;
}
console.log(addseven(arr));