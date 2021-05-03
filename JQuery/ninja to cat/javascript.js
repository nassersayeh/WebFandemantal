$(document).ready(function() {
    // your jquery codes here
    $('img').click(function () {
        var x = $(this).attr('data-alt-src');
        $(this).attr('data-alt-src', $(this).attr('src'));
        $(this).attr('src',x);
    });

    });



