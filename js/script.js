$(document).ready(function() {
    // Spustí se při načtení DOMu (struktura bez externích souborů - obrázků)
});

$(window).load(function() {
    // Spustí se po kompletním načetení stránky, důležitě především pro obrázky
});


function scrolling () {

}

function resizing () {

}

$(document).on('scroll', scrolling);
$(window).resize(resizing);