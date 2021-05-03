
function arrreturn (arr){
    var temp = arr[0];
    arr[0] = arr[arr.length-1]
    arr[arr.length-1]= temp;

    temp = arr[arr.length-1-2];
    arr[arr.length-1-2]=arr[arr.length-1-3];
    arr[arr.length-1-3]=temp;
    console.log(arr);
}
var arr = [1,2,3,4,5,6];
arrreturn(arr);