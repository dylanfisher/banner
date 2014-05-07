//
// Primary Javascript file
//

$(function() {
    //
    // Define variables
    //
    var docHeight     = $(document).height(),
        docWidth      = $(document).width(),
        headerWidth   = $('header').outerWidth(true) + $('header').position().left,
        headerHeight  = $('header').outerHeight(true) + $('header').position().top,
        infoBoxHeight = $('#info-box').outerHeight(true),
        infoBoxWidth  = $('#info-box').outerWidth(true),
        mobile        = false,
        mobileSize    = 800,
        breakpoint    = 800,
        randImage     = $('.home-background').attr('data-bg'),
        isHome        = $('.page-template-page-home-php').length;

    //
    // Call functions
    //

    setMobile();

    // Info box
    setInfoBox();

    // Check to make sure we don't cover up the header nav
    var infoBoxPosX = Math.floor((Math.random() * (docWidth - infoBoxWidth - headerWidth)) + headerWidth );
    var infoBoxPosY = Math.floor((Math.random() * (docHeight - infoBoxHeight - headerHeight - 120)) + headerHeight );

    if (infoBoxPosX > headerWidth){
        infoBoxPosY = Math.floor(Math.random() * (docHeight - infoBoxHeight - 120));
    } else {
        infoBoxPosY = Math.floor((Math.random() * (docHeight - infoBoxHeight - headerHeight - 120)) + headerHeight );
    }

    if (infoBoxPosY > headerHeight){
        infoBoxPosX = Math.floor(Math.random() * (docWidth - infoBoxWidth));
    } else {
        infoBoxPosX = Math.floor(Math.random() * (docWidth - infoBoxWidth - headerWidth) + headerWidth);
    }

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

    // Back to top button
    $(document).on('click', '.to-top', function(){
        $('html, body').animate({scrollTop: 0});
    });

    // Disable hover on breadcrumbs if we have started scrolling
    $('nav').before('<div id="nav-disabler" class="nav-disabler"></div>');

    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $('header, header nav').addClass('disabled');
            $('#nav-disabler').show();
        } else {
            $('header, header nav').removeClass('disabled');
            $('#nav-disabler').hide();
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

    $('nav').on('mouseenter', function(){
        $('header').addClass('fixed');
        // $('#nav-disabler').hide();
    });

    $('nav').on('mouseleave', function(){
        $('header').removeClass('fixed');
        // $('#nav-disabler').show();
    });

    // Nav hover at mobile
    $('#mobile-menu').on('click touchstart', function(e){
        e.preventDefault();
        $('nav').slideToggle();
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

    $(window).resize(function(){
        setMobile();
        if(window.outerWidth >= breakpoint){
            // Not mobile
            $('nav').css({display: 'block'});
        }
    });

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
        if (window.outerWidth <= mobileSize) {
            mobile = true;
            $('body').addClass('mobile-layout');
        } else {
            mobile = false;
            $('body').removeClass('mobile-layout');
        }
    }
});
