(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 150, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    //Login Page Popup
    
    document.addEventListener("DOMContentLoaded", function () {
        let loginButton = document.getElementById("login");
        let popup = document.getElementById("popup");
        let closeButton = document.querySelector(".close-btn");
        let yesButton = document.getElementById("yes-btn");
        let noButton = document.getElementById("no-btn");
    
        // Ensure popup is hidden on page load
        popup.style.display = "none";
    
        // Show popup when "Login" button is clicked
        loginButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default navigation
            popup.style.display = "flex"; // Show popup
            document.body.classList.add("no-scroll"); // Disable scrolling
        });
    
        // Close popup when clicking on 'X' button
        closeButton.addEventListener("click", function () {
            popup.style.display = "none"; // Hide popup
            document.body.classList.remove("no-scroll"); // Enable scrolling again
        });
    
        // Redirect to login page if "Yes" is clicked
        yesButton.addEventListener("click", function () {
            window.location.href = "https://seemskhatorbori.in/site/userlogin";
        });
    
        // Redirect to admission page if "No" is clicked
        noButton.addEventListener("click", function () {
            window.location.href = "admission.html";
        });

    });
    
})(jQuery);

$(".faculty-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    loop: true,
    center: false,
    dots: true,
    nav: false,
    responsive: {
        0:{ items:1 },
        576:{ items:2 },
        768:{ items:3 },
        992:{ items:4 }
    }
});

