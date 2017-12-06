$(function() {

	// Custom JS
    if($(window).width() > 450) {
        $('.header-menu-btn').hide();
        $('.menu').addClass('menu-open');
    }
    $('.header-menu-btn, .menu-close-btn').click(function () {
        var $mainMenuEl = $('#mainMenu');
        if ($mainMenuEl.hasClass('menu-open')){
            $('.header-menu-btn').fadeIn();
            $('body, html').removeClass('noscroll');
        }
        else {
            $('.header-menu-btn').fadeOut();
            $('body, html').addClass('noscroll');
        }
        $mainMenuEl.toggleClass('menu-open');
    });

    $('.phone-selection-links a').click(function (e) {
        e.preventDefault();
        $('.phone-selection-links a').removeClass('active');
        $(this).addClass('active');
        var $newActiveItemEl = $($(this).attr('href'));
        $('.phone-selection-items a.active').fadeOut(200,function () {
            $(this).removeClass('active');
            $newActiveItemEl.fadeIn(200).addClass('active');
        });
    });

    $('.drop-down .expand-collapse-btn').click(function () {
        if(!$(this).closest('.drop-down').hasClass('open'))
            $(this).closest('.menu-items').find('.drop-down.open').find('.drop-down-content').slideToggle({
                start: function () {
                    $(this).closest('.menu-items').find('.drop-down.open').toggleClass('open');
                }
            });
        $(this).closest('.drop-down').find('.drop-down-content').slideToggle({
            start: function () {
                $(this).closest('.drop-down').toggleClass('open');
            }
        });
    });

    $('.accordion-btn').click(function () {
        if(!$(this).closest('.accordion-item').hasClass('accordion-item-open'))
            $(this).closest('.accordion').find('.accordion-item-open .accordion-body').slideToggle({
                start: function () {
                    $(this).closest('.accordion').find('.accordion-item-open').toggleClass('accordion-item-open');
                }
            });
        $(this).closest('.accordion-item').find('.accordion-body').slideToggle({
            start: function () {
                $(this).closest('.accordion-item').toggleClass('accordion-item-open');
            }
        });
    });

    $('.callback-btn').magnificPopup({
        items: {
            src: '#callbackPopup',
            type: 'inline'
        },
        removalDelay: 300,
        mainClass: 'mfp-fade',
        fixedContentPos: false
    });

    $('.consult-request-btn').magnificPopup({
        items: {
            src: '#consultRequestPopup',
            type: 'inline'
        },
        removalDelay: 300,
        mainClass: 'mfp-fade',
        fixedContentPos: false
    });

    $('[type=tel]').inputmask({
        mask:'+7(999)999-99-99',
        showMaskOnHover: false
    });


    //TODO: To plugin
    $('.form-group input').keyup(function () {
        if (this.value !== '')
            $(this).addClass('filled');
        else
            $(this).removeClass('filled');
    });

    $('.form-group').closest('form').on('reset', function () {
       $(this).find('.form-group').removeClass('filled');
    });

    //TODO: To plugin
    jQuery.validator.addMethod("phone", function (value, element) {
        return this.optional(element) || /\+7\(\d+\)\d{3}-\d{2}-\d{2}/.test(value);
    }, "Номер телефона не заполнен до конца");

    var validateOptions = {
        rules: {
            'phone': {
                required: true,
                phone: true
            }
        },
        errorPlacement: function () {
            return true;
        },
        submitHandler: function (form) {

            var th = $(form);
            setTimeout(function () {
                if (th.hasClass('white-popup')) {
                    th.magnificPopup('close');
                }
                th.trigger("reset");
                $.magnificPopup.open({
                    items: {
                        type: 'inline',
                        src: '#thankYouPopup'
                    }
                });
            }, 1000);
            return false;
        }
    }
    //TODO: To plugin
    $('#callbackForm').validate(validateOptions);
    $('#requestForm').validate(validateOptions);
    $('#consultRequestForm').validate(validateOptions);
    $('#subscribeForm').validate(validateOptions);

    $('.services-carousel').owlCarousel({
        items: 1,
        autoplay: true,
        stopOnHover: false,
        loop: true,
        dots: true,
        dotsContainer: '.mobile-dots',
        navContainer: '.services-carousel-nav',
        navText: ['<i class="icons8 icons8-icon-4"></i>', '<i class="icons8 icons8-icon-3"></i>'],
        responsive: {
            768: {
                nav: true,
                dotsContainer: '.desktop-dots'
            }
        }
    });

    $('.companies-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        stopOnHover: false,
        items: 1,
        nav: true,
        navText: ['<i class="icons8 icons8-icon-4"></i>', '<i class="icons8 icons8-icon-3"></i>'],
        responsive: {
            450: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

    $('.show-more-btn').click(function () {
        $('#advantages').find('.advantage-item').slideDown();
        $(this).hide();
    });

    $('.show-video-btn').magnificPopup({
        items: {
            src: 'https://www.youtube.com/watch?v=9Xdi6KHoL28'
        },
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
            '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src'
        },
        fixedContentPos: false
    });

    var $scrollUpBtnEl = $('.scroll-up-btn');

    $scrollUpBtnEl.click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    });

    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 800) {
            $scrollUpBtnEl.show();
        } else {
            $scrollUpBtnEl.hide();
        }
    });

    $('.about-carousel').owlCarousel({
        items: 1,
        thumbs: true,
        thumbsPrerendered: true,
        thumbContainerClass: 'owl-thumbs'
    });

    $('.principles-carousel').owlCarousel({
        items: 1,
        dots: true
    });

    $('.history-carousel').owlCarousel({
        items: 1,
        dots: false,
        thumbsPrerendered: true,
        thumbContainerClass: 'history-years'
    });

    $('.recommendations-carousel').owlCarousel({
        items: 1,
        stagePadding: 60,
        margin: 31,
        responsive: {
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    });

});
