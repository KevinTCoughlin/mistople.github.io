$(window).scroll(function() {    
    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 230) {
            $(".footer").addClass("footer-fade animated fadeIn");
        }
    });