var arr = [1,3,-5,7];
var temp = 0;
function swapValues(){

    temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1]=temp;
    
    
    return arr;
}
console.log(swapValues());