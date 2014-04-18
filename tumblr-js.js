$(function() {
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

    $('nav').on('mouseenter', function(){
        $('header').addClass('fixed');
    });

    $('nav').on('mouseleave', function(){
        $('header').removeClass('fixed');
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

    function showMenu(){
        $('#menu-primary-nav').addClass('active');
    }

    function hideMenu(){
        $('#menu-primary-nav').removeClass('active');
        $('#fade-overlay').remove();
    }
});