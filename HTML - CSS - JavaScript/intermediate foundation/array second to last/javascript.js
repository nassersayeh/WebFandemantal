var num = [1,2,3,4,3,5,6,"nasser",3];
function secondlast(num){
    for(var i = 0 ; i < num.length ; i++){
        if(i == num.length-2){
            console.log(num[i]);
        }
    }

}
secondlast(num);