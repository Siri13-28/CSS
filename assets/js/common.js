$(document).ready(function () {
    $headerHeight = $('.header').outerHeight();
    $menusection = $('.mv-sec');
    function setHeight() {
        $menusection.css("margin-top", $headerHeight);
    } setHeight();
    $(window).resize(function () {
        setHeight();
    });

    $('.nav-btn').on('click', function () {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('is-show');
    });
})  