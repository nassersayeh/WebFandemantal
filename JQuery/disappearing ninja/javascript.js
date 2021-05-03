$(document).ready(function() {
    // your jquery codes here
    $('img').click(function () {
    $(this).slideToggle( "slow" );
    console.log("slided");

    })
    $('button').click(function () {
        $('img').show();
        console.log("slided");
    
        })
});
