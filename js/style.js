$(function () {

    $('.navbar .navbar-nav .nav-item .nav-link').click(function (e) {
        e.preventDefault()

        $(this).addClass('active').parent().siblings().find('a').removeClass('active')

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 300)
    })

    $('.navbar .navbar-nav .nav-item .nav-link[href="#home"]').click(function () {
        $('html, body').animate({scrollTop: 0}, 300)
    })

    $(window).scroll(function () {
        if ($(this).scrollTop() == 0) {
            $('.navbar .navbar-nav .nav-item .nav-link[href="#home"]').addClass('active')
        }

        $('section, header').each(function () {
            if ($(window).scrollTop() > $(this).offset().top - 72) {
                $(`.navbar .navbar-nav .nav-item .nav-link[href="#${$(this).attr('id')}"]`).addClass('active').parent().siblings().find('.nav-link').removeClass('active')
            }
        })
    })

    $('.works ul li').click(function () {
        $(this).addClass('active').siblings().removeClass('active')

        let work = $(this).text()

        $('.works .row > div').each(function () {
            if (work != 'All') {
                if ($(this).data('work') == work) {
                    $(this).fadeIn(300)
                } else {
                    $(this).fadeOut(300)
                }
            } else {
                $(this).fadeIn(300)
            }
        })
    })

})