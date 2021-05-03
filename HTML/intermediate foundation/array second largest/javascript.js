var arr = [1,2,3,4,3,5,6,3,4,14,7];
var max  = arr[0];
var c = 0;
function secondlargest(arr,max){
    
    for(var i = 0 ; i<arr.length ; i++)
    {
        if(arr[i]>max)
        {
        max=arr[i];
        c++
    }
    if(c==2)
    {
        console.log(arr[i]);
    }


    }

}
secondlargest(arr,max);