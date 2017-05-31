$(document).ready(function() {
    $(".home").click(function() {
        $("*").removeClass("active"), $(".home").parent().addClass("active"), $("html, body").animate({
            scrollTop: $("#home").offset().top
        }, 500)
    }), $(".contact").click(function() {
        $("*").removeClass("active"), $(".contact").parent().addClass("active"), $("html, body").animate({
            scrollTop: $("#contact").offset().top
        }, 500)
    }), $(".asthmaTick").click(function() {
        $("*").removeClass("active"), $(".asthmaTick").parent().parent().parent().addClass("active"), $(".asthmaTick").parent().addClass("active"), $("html, body").animate({
            scrollTop: $("#asthmaTick").offset().top
        }, 500)
    }), $(".asthmaTick").click(function() {
        $("*").removeClass("active"), $(".asthmaTick").parent().parent().parent().addClass("active"), $(".asthmaTick").parent().addClass("active"), $("html, body").animate({
            scrollTop: $("#asthmaTick").offset().top
        }, 500)
    })
});