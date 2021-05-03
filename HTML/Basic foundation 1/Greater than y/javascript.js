var arr = [1,3,5,7];
var y =3;
var count = 0;
function greater(arr){
    for(var i = 1 ; i<51 ; i++)
    {
        if(arr[i]> y)
        {
            count++
        }
    }
    return count;
}
console.log(greater(arr));