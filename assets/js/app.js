(function ($) {
    "use strict";

    // Smooth scrolling using jQuery easing
    // $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //         var target = $(this.hash);
    //         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //         if (target.length) {
    //             $('html, body').animate({
    //                 scrollTop: (target.offset().top - 54)
    //             }, 1000, "easeInOutExpo");
    //             return false;
    //         }
    //     }
    // });

    // Closes responsive menu when a scroll trigger link is clicked
    // $('.js-scroll-trigger').click(function () {
    //     $('.navbar-collapse').collapse('hide');
    // });
    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
    // Welcome btn scroll down to About Me page
    function scrollToAnchor(aid) {
        var sectionTag = $("section[id='" + aid + "']");
        $('html,body').animate({ scrollTop: sectionTag.offset().top }, 'slow');
    }

    $("#login-btn").click(function () {
        scrollToAnchor('login');
    });

})(jQuery);

// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//   };
  
//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//   };
  
var grid = document.querySelector('.grid');

var msnry = new Masonry( grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});

imagesLoaded( grid ).on( 'progress', function() {
  // layout Masonry after each image loads
  msnry.layout();
});