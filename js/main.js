"use strict"

// BURGER
$(document).ready(function () {
    $('.burger').click(function (event) { 
        $('.burger,.header__nav,.layout').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
