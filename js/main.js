$(function () {

    // $(window).scroll(function () {
    //     $('#section__1').each(function () {
    //         var imagePos = $(this).offset().top;
    //         var topOfWindow = $(window).scrollTop();
    //         if (imagePos < topOfWindow + 650) {
    //             $(this).addClass("animate__fadeInDown");
    //         }
    //     });
    // });

    // $(window).scroll(function () {
    //     $('#section__2').each(function () {
    //         var imagePos = $(this).offset().top;
    //         var topOfWindow = $(window).scrollTop();
    //         if (imagePos < topOfWindow + 650) {
    //             $(this).addClass("animate__fadeInDown");
    //         }
    //     });
    // });

    // $(window).scroll(function () {
    //     $('#section__3').each(function () {
    //         var imagePos = $(this).offset().top;
    //         var topOfWindow = $(window).scrollTop();
    //         if (imagePos < topOfWindow + 650) {
    //             $(this).addClass("animate__fadeInDown");
    //         }
    //     });
    // });

    // $(window).scroll(function () {
    //     $('#section__4').each(function () {
    //         var imagePos = $(this).offset().top;
    //         var topOfWindow = $(window).scrollTop();
    //         if (imagePos < topOfWindow + 650) {
    //             $(this).addClass("animate__fadeInDown");
    //         }
    //     });
    // });

    // $(window).scroll(function () {
    //     $('#section__5').each(function () {
    //         var imagePos = $(this).offset().top;
    //         var topOfWindow = $(window).scrollTop();
    //         if (imagePos < topOfWindow + 650) {
    //             $(this).addClass("animate__fadeInDown");
    //         }
    //     });
    // });


    var btnOpen = document.getElementById('returnCallBut');
    var btnOpen2 = document.getElementById('returnCallBut2');
    var btnOpen3 = document.getElementById('returnCallBut3');
    var btnOpen4 = document.getElementById('returnCallBut4');
    var btnOpen5 = document.getElementById('returnCallBut5');
    var btnOpenM = document.getElementById('returnCallBut_m');

    var modal = document.getElementById('wrapper-modal');

    var overlay = document.getElementById('overlay');
    var btnClose = document.getElementById('btn-close');

    btnOpen.addEventListener('click', function () {
        modal.classList.add('active');
        $('body').addClass('scroll_Off');
    });

    btnOpenM.addEventListener('click', function () {
        modal.classList.add('active');
        $('#wrapper-modal-2').hide();
    });

    btnOpen2.addEventListener('click', function () {
        modal.classList.add('active');
        $('body').addClass('scroll_Off');
    });

    btnOpen3.addEventListener('click', function () {
        modal.classList.add('active');
        $('body').addClass('scroll_Off');
    });

    btnOpen4.addEventListener('click', function () {
        modal.classList.add('active');
        $('body').addClass('scroll_Off');
    });

    btnOpen5.addEventListener('click', function () {
        modal.classList.add('active');
        $('body').addClass('scroll_Off');
    });

    function closeModal() {
        modal.classList.remove('active');
        $('body').removeClass('scroll_Off');
    }

    overlay.addEventListener('click', closeModal);
    btnClose.addEventListener('click', closeModal);

    /////////////////////////////////////////////////////////////////////////

    /* form-validation */

    $.validator.addMethod('regex', function (value, element, regexp) {
        let regExsp = new RegExp(regexp);
        return regExsp.test(value);
    }, 'Please check your input');

    $('#form__return-link').validate({
        rules: {
            name: {
                required: true,
                regex: "[А - Яа-я]{1,32}"
            },
            phone: {
                digits: true,
                required: true,
                minlength: 10,
                maxlength: 11,
                regex: "[0-9]+"
            }
        },
        messages: {
            name: 'Введите имя правильно',
            phone: 'Введите Ваш номер'
        }
    })

    //////////////////////////////////////////////////
    // const pulse = document.getElementById('pulse');

    // pulse.addEventListener('mouseover', function() {
    //     pulse.classList.add('animate__animated', 'animate__pulse');
    // });

    // pulse.addEventListener('animationend', () => {
    //     pulse.classList.remove('animate__animated', 'animate__pulse');
    // });
    /////////////////////////////////////////////////

    /* hamburger */

    $('.hamburger').on('click', function () {
        $('#wrapper-modal-2').show();
        $('body').addClass('scroll_Off');
        window.scrollTo(0, 0);
    })

    $('.btn-close-2').on('click', function () {
        $('#wrapper-modal-2').hide();
        $('body').removeClass('scroll_Off');
    })

    $('#menu_list-2').on('click', function () {
        $('#wrapper-modal-2').hide();
        $('body').removeClass('scroll_Off');
    })
    ///////////////////////////////////////////////////////

})

