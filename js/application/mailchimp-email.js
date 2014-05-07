//
// Mailchimp email API
//

$(function(){
    // Remove mailing list input placeholder text on focus
    $('#email-form').focusin(function(){
        $(this).attr('placeholder', '');
    });
    $('#email-form').focusout(function(){
        $(this).attr('placeholder', 'Your email here');
    });

    $(document).on('click', '.validation', function(){
        $(this).remove();
    });

    var emailVal = $('#email-form').val();

    $('#email-form').keyup(function(e){
        emailVal = $('#email-form').val();
        if(emailVal.length){
            $('#email-button').fadeIn('fast').css({display: 'inline-block'});
        } else {
            $('#email-button').fadeOut('fast');
        }
    });

    // API Subscribe
    $('#email-form').keydown(function (e){
        if(e.keyCode == 13){
            submitEmail();
        }
    });
    $(document).on('mousedown', '#email-button', function(){
        submitEmail();
    });

    function submitEmail(){
        emailVal = $('#email-form').val();
        // Basic email validation
        var validation = emailVal;
        if( /(.+)@(.+){2,}\.(.+){2,}/.test(validation) ){
            // Validation success
            $('.email-box .validation').remove();
            $('.email-box').append('<div id="validation" class="validation-success validation"><p>Thanks for joining our newsletter! You should receive a confirmation email shortly.</p></div>');
            $('#validation').hide().fadeIn('fast');
            $.ajax({
                url: '/wp-content/themes/banner/mailchimp-subscribe.php',
                type: 'POST',
                data: {email: emailVal}
            }).fail(function() {
                $('.email-box .validation').remove();
                $('.email-box').append('<div id="validation" class="validation-failed validation"><p>Sorry, it looks like there was a server error preventing you from signing up. We&#39;re looking into it.</p></div>');
                $('#validation').hide().fadeIn('fast');
            });
        } else {
            // Validation failed
            $('.email-box .validation').remove();
            $('.email-box').append('<div id="validation" class="validation-fail validation"><p>&#42; Sorry, it looks like you entered an invalid email address.</p></div>');
            $('#validation').hide().fadeIn('fast');
        }
    }
});
