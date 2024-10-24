(function ($) {
    "use strict";

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });


    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Main carousel
    $(".carousel .owl-carousel").owlCarousel({
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        smartSpeed: 300,
        dots: false,
        loop: true,
        nav: true,
        rtl: true,
        navText: [
            '<i class="fa fa-angle-right" aria-hidden="true"></i>',
            '<i class="fa fa-angle-left" aria-hidden="true"></i>'
        ]
    });

    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });

    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        animateIn: 'slideInDown',
        animateOut: 'slideOutDown',
        items: 1,
        smartSpeed: 450,
        dots: false,
        loop: true,
        nav: true,
        rtl: true,
        navText: [
            '<i style="rotate: 180deg" class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i style="rotate: 180deg" class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Show popup when "about-us-video" button is clicked
    $('.about-us-video').on('click', function () {
        $('.popup').css('display', 'block');
        $('body').css('overflow', 'hidden');
    });

    $('.close-video').on('click', function () {
        $('.popup').css('display', 'none');
        $('body').css('overflow', '');
    });

    $('.popup').on('click', function (event) {
        if (!$(event.target).closest('.container').length) {
            $('.popup').css('display', 'none');
            $('body').css('overflow', '');
        }
    });

    $(document).ready(function () {
        // Handle click event on the .fa-eye button
        $('.eye').on('click', function () {
            // Find the closest card and get its title
            var card = $(this).closest('.card');
            var cardTitle = card.find('.card-title').text();

            // Check if the card has a video or an image
            var videoSrc = card.find('video').attr('src');
            var imageSrc = card.find('.card-img-top').attr('src');

            // Update the popup title
            $('.popup-title').text(cardTitle);

            // Clear previous content in the popup
            $('.main-img').remove();
            $('.main video').remove();

            if (videoSrc) {
                // If it's a video, create a video element
                $('.main').append('<video autoplay controls class="main-video" style="width: 100%; height: auto;"><source src="' + videoSrc + '" type="video/mp4"></video>');
            } else if (imageSrc) {
                // If it's an image, create an image element
                $('.main').append('<img src="' + imageSrc + '" class="main-img" alt="img" style="width: 100%; height: auto;">');
            }

            // Show the popup
            $('.popup-project').css('display', 'block');
        });

        // Handle close button click event
        $('.close-img').on('click', function () {
            // Hide the popup
            $('.popup-project').css('display', 'none');
        });

        // Close the popup if clicked outside the main content
        $('.popup-project').on('click', function (e) {
            if ($(e.target).closest('.main').length === 0) {
                // Hide the popup if the click is outside the .main container
                $('.popup-project').css('display', 'none');
            }
        });
    });




})(jQuery);

