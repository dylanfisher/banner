// Primary Javascript file

$(function() {
    //
    // Define variables
    //
    var docHeight = $(document).height(),
        docWidth = $(document).width(),
        infoBoxHeight = $('#info-box').outerHeight(true),
        infoBoxWidth = $('#info-box').outerWidth(true),
        infoBoxPosY = Math.floor(Math.random() * (docHeight - infoBoxHeight)),
        infoBoxPosX = Math.floor(Math.random() * (docWidth - infoBoxWidth)),
        mobile = false,
        mobileSize = 800;

    //
    // Call functions
    //

    setMobile();

    // Info box
    $('#info-box').css({
        display: 'block',
        top: infoBoxPosY,
        left: infoBoxPosX
    });

    // To top button
    $('#to-top').click(function(){
        $('html, body').animate({scrollTop: 0});
    });

    // Nav hover
    $('#menu-primary-nav').mouseenter(function(){
        $('body:not(.home) header').after('<div id="fade-overlay" class="fade-overlay"></div>');
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

    $(window).resize(function(){
        setMobile();
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
        if ($(window).width() < mobileSize) {
            mobile = true;
            $('body').addClass('mobile-layout');
        } else {
            mobile = false;
            $('body').removeClass('mobile-layout');
        }
    }
});