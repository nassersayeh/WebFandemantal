var arr = [1,3,5,7];
var postivecount = 0;
function positive(arr){
    for(var i = 0 ; i<arr.length ; i++)
    {
        if(arr[i]>0)
        {
            postivecount++;
        }
    }
    arr[arr.length-1] = postivecount;
    return arr;
}
console.log(positive(arr));