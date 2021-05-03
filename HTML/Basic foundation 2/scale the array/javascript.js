
function arrreturn (arr,num){
    for(var i = 0 ; i<arr.length ; i++)
    {
        arr[i]*=num;
    }
    console.log(arr);
}
var arr = [1,2,3];
var num = 3;
arrreturn(arr,num);