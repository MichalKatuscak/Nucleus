/**
 * Firefox totiž nemumí získat data z "body" a Chrome naopak z "html"...
 */
function get_scrollTop () {
    if ($("html").scrollTop()) return $("html").scrollTop();
    if ($("body").scrollTop()) return $("body").scrollTop();
    return 0;
}