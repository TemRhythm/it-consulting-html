$(function() {

	// Custom JS
    $('.header-menu-btn, .menu-close-btn').click(function () {
        $('#mainMenu').toggleClass('menu-open');
    });

    $('.phone-selection-links a').click(function (e) {
        e.preventDefault();
        $('.phone-selection-links a').removeClass('active');
        $(this).addClass('active');
        $('.phone-selection-items a').removeClass('active');
        $($(this).attr('href')).addClass('active');
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

    $('.callback-btn').magnificPopup({
        items: {
            src: '#callbackPopup',
            type: 'inline'
        },
        fixedContentPos: false
    });

    $('.consult-request-btn').magnificPopup({
        items: {
            src: '#consultRequestPopup',
            type: 'inline'
        },
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
        items: 1,
        navText: ['<i class="icons8 icons8-icon-4"></i>', '<i class="icons8 icons8-icon-3"></i>'],
        responsive: {
            450: {
                items: 2
            },
            768: {
                items: 3,
                nav: true
            },
            992: {
                items: 4,
                nav: true
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

});
