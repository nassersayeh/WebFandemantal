var arr = [1,3,5,6];
var sum = 0;
function reversearr(){
    for(var i=0; i<arr.length/2 ; i++){
        var temp = arr[i];
        arr[i]= arr[arr.length-1 -i];
        arr[arr.length-1 -i]= temp;
    }
    return arr;

}
console.log(reversearr(arr));