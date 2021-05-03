var arr = [1,3,-5,7];
var odd = 0;
function secondtolast(){
    for(var i = arr.length-2 ; i<arr.length-1 ; i++)
    {
        console.log(arr[i]);
    }
    for(var i = 0 ; i<arr.length; i++)
    {
        if(arr[i]%2 == 1)
        odd = arr[i];
        break;
    }
    return odd;
}
secondtolast();
