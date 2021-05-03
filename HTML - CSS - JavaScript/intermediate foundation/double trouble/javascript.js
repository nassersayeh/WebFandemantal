var arr = [4, "Ulysses", 42, false];
function doubletrouble(arr){
    var newarr = [];
    for(var i = 0 ; i<arr.length ; i++)
    {
        newarr.push(arr[i]);
        newarr.push(arr[i]);
    }
    return newarr;
}
console.log(doubletrouble(arr));