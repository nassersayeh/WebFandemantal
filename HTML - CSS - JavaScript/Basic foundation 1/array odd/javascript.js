var arr = [];

function oddArray(){
    for(var i = 1 ; i<51 ; i++)
    {
        if(i%2 == 1)
        {
            arr.push(i);
        }
    }
    return arr;
}
console.log(oddArray());