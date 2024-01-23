$(document).ready(function () {
    $('.nav-btn').on('click', function () {
        $(this).toggleClass('active');
        $('.nav-bar').toggleClass('is-show');
    });
})  