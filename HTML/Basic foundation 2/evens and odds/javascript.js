var arr = [1,3,5,-7,-5,-4];
var poscount = 0;
var nigcount = 0;
function oddEven(arr){
    for(var i = 0 ; i<arr.length ; i++)
    {
        if(arr[i]> 0)
        {
            poscount++
        }
        else
        {
            nigcount++;
        }
        if(poscount == 3)
        {
            console.log("Even more so!")
        }
        if (nigcount == 3)
        {
            console.log("thats odd!")
        }
    }
    
}
oddEven(arr);