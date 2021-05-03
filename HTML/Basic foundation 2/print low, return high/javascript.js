var arr = [1,3,-5,7];
var low = 0;
var high = 0;
function lowHigh(){

    for(var i = 0;i<arr.length;i++)
    {
        if(arr[i]<low)
        {
            low =arr[i];

        }
        else
        high = arr[i];
    }
    console.log(low);
    
    
    return high;
}
lowHigh();