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
        $(this).closest('.drop-down').find('ul').slideToggle({
            start: function () {
                $(this).closest('.drop-down').toggleClass('open');
            }
        });
    });

    $('.callback-btn').magnificPopup({
        items: {
            src: '#callbackPopup',
            type: 'inline'
        }
    });

    $('.consult-request-btn').magnificPopup({
        items: {
            src: '#consultRequestPopup',
            type: 'inline'
        }
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

    //TODO: To plugin
    $('form').validate({
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
    });

    $('.services-carousel').owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        dotsContainer: '.services-carousel-dots',
        navContainer: '.services-carousel-nav',
        navText: ['<i class="icon8 icon8-arrow-left"></i>', '<i class="icon8 icon8-arrow-right"></i>']
    });

    $('.companies-carousel').owlCarousel({
        items: 1,
        nav: true,
        navText: ['<i class="icon8 icon8-arrow-left"></i>', '<i class="icon8 icon8-arrow-right"></i>'],
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
    })

});
