var arr = [1,3,-5,7];
var max = 0;
var min = 0;
var sum = 0;
var avg = 0;
newarr=[];
function maxminavg(max,min,sum,avg){
    for(var i = 0 ; i<arr.length ; i++)
    {
        if(arr[i]<min)
        {
            min=arr[i];
        }
        else if(arr[i]>max)
        {
            max=arr[i];
        }
        sum+=arr[i];
    }
    avg=sum/arr.length;
    newarr.push(max,min,avg);
    return newarr;
}
console.log(maxminavg(max,min,sum,avg));