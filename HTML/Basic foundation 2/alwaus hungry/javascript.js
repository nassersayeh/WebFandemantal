var arr = ["food","nasser","sayeh","food"];
function hungre(){
    for(var i = 0 ; i<arr.length ; i++)
    {
        if(arr[i].match("food"))
        {
            console.log("Yummi");
        }
        else{
            console.log("im hungry");
        }
    }
}
hungre(arr);