var arr = ["hello", "dojo", "awesome"];

function previousLengths(arr){
    for (var i=arr.length-1;i>0;i--){
        arr[i] = arr[i-1].length;
    }
    return arr;
}


    

console.log(previousLengths(arr));