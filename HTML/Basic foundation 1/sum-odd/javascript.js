var sum = 0;
function getEven(){
    for(var i = 0 ; i<1000 ; i++)
    {
        if(i % 2 == 1)
        {
            sum+=i;
            console.log(sum);
        }
        else{

        }
    }
}
getEven();