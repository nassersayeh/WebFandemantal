var arr = [1,2,3,4,5,6];

function increment(arr){
    for(var i = 0 ; i<arr.length ; i++)
    {
        if(i % 2 !==0){
        arr[i] = arr[i] + 1; 
        }
        console.log(arr[i]);
    }
    return arr;
}
console.log(increment(arr));