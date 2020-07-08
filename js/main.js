let value = true;
alert(typeof value);
value = String(value); // теперь value это строка "true"
alert(typeof value); 

$( document ).ready(function() {
    $('.navigation__burger').click(function(event) {
        $('.navigation__burger,.navigation__menu').toggleClass('active');
        $('.body').toggleClass('lock');
    });

    lightbox.option({
        'resizeDuration': 1200,
        'wrapAround': true,
        'alwaysShowNavOnTouchDevices': true,
        'albumLabel': " %1 — %2", 
        'fitImagesInViewport': true
        });

});


// Не будет ошибкой
