var arr = [1,3,-5,7];
var temp = 0;
function Biggiesize(){
    for(var i = 0 ; i<arr.length ; i++){
    if(arr[i]>0)
    {
        arr[i] = "big";
    }
    }
    
    return arr;
}
console.log(Biggiesize());