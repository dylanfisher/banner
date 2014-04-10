//
// Primary Javascript file
//

$(function() {
    //
    // Define variables
    //
    var docHeight = $(document).height(),
        docWidth = $(document).width(),
        infoBoxHeight = $('#info-box').outerHeight(true),
        infoBoxWidth = $('#info-box').outerWidth(true),
        infoBoxPosY = Math.floor(Math.random() * (docHeight - infoBoxHeight - 120)),
        infoBoxPosX = Math.floor(Math.random() * (docWidth - infoBoxWidth)),
        mobile = false,
        mobileSize = 800,
        breakpoint = 800,
        randImage = $('.home-background').attr('data-bg'),
        isHome = $('.page-template-page-home-php').length;

    //
    // Call functions
    //

    setMobile();

    // Info box
    setInfoBox();
    function setInfoBox(){
        if(window.outerWidth >= breakpoint){
            $(".draggable" ).draggable({
                cancel: "p, input"
            });

            $('#info-box').css({
                display: 'block',
                top: infoBoxPosY,
                left: infoBoxPosX
            });
        } else {
            // $(".draggable").draggable('destroy');
        }
    }

    // To top button
    $('#to-top').click(function(){
        $('html, body').animate({scrollTop: 0});
    });

    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $('header, header nav').addClass('disabled');
        } else {
            $('header, header nav').removeClass('disabled');
        }
    });

    // Nav hover
    $('#menu-primary-nav').mouseenter(function(){
        if(mobile === false){
            $('body:not(.home) header').after('<div id="fade-overlay" class="fade-overlay"></div>');
        }
    });
    $('#menu-primary-nav li:first-child').mouseenter(function(){
        showMenu();
    });
    $('#menu-primary-nav').mouseleave(function(){
        hideMenu();
    });

    //
    // Resize
    //

    if(isHome == 1){
        if(window.outerWidth >= breakpoint){
            $('#info-box').css({
                display: 'block',
                top: infoBoxPosY,
                left: infoBoxPosX
            });
        } else {
            // Mobile
            $('.content').prepend('<img class="mobile-image" src="' + randImage + '">');
        }

        $(window).resize(function(){
            setMobile();
            setInfoBox();
            if(window.outerWidth >= breakpoint){
                // Not mobile
                $('.mobile-image').removeClass('hidden');
            } else {
                // Mobile
                $('.mobile-image').addClass('hidden');
                setInfoBox();
                $('.mobile-image').remove();
                $('.content').prepend('<img class="mobile-image" src="' + randImage + '">');
            }
        });
    }

    //
    // Define functions
    //

    function showMenu(){
        if(mobile === false){
            $('#menu-primary-nav').addClass('active');
            $('#breadcrumbs').hide();
        }
    }

    function hideMenu(){
        $('#menu-primary-nav').removeClass('active');
        $('#fade-overlay').remove();
        $('#breadcrumbs').show();
    }

    function setMobile(){
        if (window.outerWidth < mobileSize) {
            mobile = true;
            $('body').addClass('mobile-layout');
        } else {
            mobile = false;
            $('body').removeClass('mobile-layout');
        }
    }
});