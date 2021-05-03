var arr = [1,3,5,6];
var max = 0;
function iteratearr(){
    for(var i = 0 ; i<arr.length ; i++)
    {
        if(arr[i]>max)
        {
            max = arr[i];
        }

    }
    console.log(max);
}
iteratearr();