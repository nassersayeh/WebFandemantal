$(document).ready(function() {
    // your jquery codes here
    $('button#btn1').click(function () {
    $('p').addClass("red");
    console.log("class added");

    })

    $('button#btn2').click(function () {
        $('p').slideToggle("slow");
        console.log("toggle");
        
        })
        $('button#btn3').click(function () {
            $('p').append("hi");
            console.log("appended");
            
            })
});
