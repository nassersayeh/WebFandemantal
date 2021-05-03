var arr = [1,3,5,6];
var avg , sum= 0;
function average(){
    for(var i = 0 ; i<arr.length ; i++)
    {
        sum+=arr[i];
    }
    avg=sum/arr.length;
    console.log(avg);
}
average();