/**
 * Counter
 * 
 * @author      Michal Katuščák <michal@katuscak.cz>
 * @version     1.1, 23/07/2015
 * 
 * Použití:
 * 
 *      <span class="js-counter">97</span>
 * 
 *      var counter;
 *      $(document).ready(){ counter = new Counter; }
 *      $(document).on('scroll', function(){ counter.check(); });
 */

var Counter = function () {
    
    $(".js-counter").each(function(){
        $(this).data("counter", parseInt($(this).text()));
        $(this).text("0");
    });
    
    this.check();
    
};

Counter.prototype.check = function () {
    
    var document_top = get_scrollTop();
    var document_height = $(window).height();
    var edge = document_top + document_height - 50;
    var counter_this = this;
    
    $(".js-counter").each(function(){
        var top = $(this).offset().top;
        if (top < edge) {
            $(this).removeClass("js-counter");
            counter_this.run(this);
        }
    });
    
};

Counter.prototype.run = function (element) {
    
    var tmp_time,tmp_number;
    
    var time = 3000;
    var steps = 100;
    var number = $(element).data("counter");
    var classname = "counter" + number;
    
    $(element).addClass(classname);
    
    for (var i=1;i<=steps;i++) {
        tmp_time = time/steps*i;
        tmp_number = Math.ceil(number/steps*i);
        
        setTimeout("$('."+classname+"').text('"+tmp_number+"');",tmp_time);
    }
    
};

if (typeof(get_scrollTop) !== "function") {
    function get_scrollTop () {
        if ($("html").scrollTop()) return $("html").scrollTop();
        if ($("body").scrollTop()) return $("body").scrollTop();
        return 0;
    }
}