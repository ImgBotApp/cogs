$(document).ready(function () {
    $(".share-button").click(function () {
        $(".share-button").css('display', 'none');
        $(".web__share").css('display', 'inline-block');
    })
});

$(document).ready(function () {
    $('#fullpage').fullpage({
        autoScrolling: true,
        fitToSection: false,
        scrollBar: true
    });

    // set the max height
    if ((window.matchMedia('(max-height: 460px)').matches) && (window.innerWidth > window.innerHeight)) {
        $("#rotateDevice").css("display", "block");
    } else {
        $("#rotateDevice").css("display", "none");
    }
});

$(window).resize(function () {
    if ((window.matchMedia('(max-height: 460px)').matches) && (window.innerWidth > window.innerHeight)) {
        $("#rotateDevice").css("display", "block");
    } else {
        $("#rotateDevice").css("display", "none");
    }
});
