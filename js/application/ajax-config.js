//
// AJAX configuration with our json-api
//

var APIData,
    ScrollPos,
    ScrollPos2,
    SitePath;

// Check to see if we are running locally
if (document.location.hostname == 'localhost'){
  SitePath = window.location.protocol + '//' + window.location.host + '/banner/';
} else {
  SitePath = window.location.protocol + '//' + window.location.host + '/';
}

$(function(){

    // Product overlay, template and request
    $(document).on('click', '.api-product', function(e){
        e.preventDefault();
        openLightbox();

        apiRequest('get_post', $(this).data('slug'), function(){
            console.log(APIData);
            getTemplate($('#lightbox-content'), 'templates/product', APIData);
        });

    });

    // Product inquiry overlay, template and request
    $(document).on('click', '.product-inquiry', function(e){
        e.preventDefault();
        ScrollPos2 = $(window).scrollTop();
        $('body').prepend('<div class="inquiry-overlay" id="inquiry-overlay"></div>');
        $('#lightbox').addClass('fixed');
        getTemplate($('#inquiry-overlay'), 'templates/inquiry', APIData);
    });

    // Press page overlay, template and request
    $(document).on('click', '.api-press', function(e){
        e.preventDefault();
        openLightbox();

        apiRequest('get_post', $(this).data('slug'), function(){
            console.log(APIData);
            getTemplate($('#lightbox-content'), 'templates/press', APIData);
        });

    });

    // Lightbox close
    $(document).on('click', '#lightbox-close', function(e){
        e.preventDefault();
        closeLightbox();
    });
    // Inquiry close
    $(document).on('click', '#inquiry-close', function(e){
        e.preventDefault();
        closeInquiry();
    });
    // Lightbox close if escape key is pressed
    $(document).keyup(function(e){
      if(e.keyCode == 27){
        if($('#inquiry-overlay').length){
            closeInquiry();
        } else {
            closeLightbox();
        }
      }
    });

});

function apiRequest(request, identifier, callback){

    if(request == 'get_post'){
        url = SitePath + 'api/' + request + '/?post_slug=' + identifier;
        $.getJSON(url, function(data) {
            APIData = data.post;
            callback();
        });
    }
}

function openLightbox(){
    var verbs = [
    'Loading','Building','Creating','Constructing','Crafting','Testing','Working',
    'Tidying','Erecting','Assembling','Arranging','Signing','Photographing','Painting',
    'Sanding','Dusting','Washing','Finishing','Drying','Updating','Searching','Polishing',
    'Measuring','Cutting','Sawing','Nailing','Screwing','Hammering','Leveling','Fetching'
    ];
    var verb = verbs[Math.floor(Math.random() * verbs.length)];

    ScrollPos = $(window).scrollTop();
    $('body')
    .prepend('<div id="lightbox" class="lightbox"><div id="lightbox-close" class="lightbox-close"></div><div id="lightbox-content"><div class="lightbox-loader" class="loader">' + verb +'...</div></div></div>')
    .addClass('fixed');
}

function closeLightbox(){
    $('body').removeClass('fixed');
    $('#lightbox').remove();
    $(window).scrollTop(ScrollPos);
}

function closeInquiry(){
    $('#lightbox').removeClass('fixed');
    $('#inquiry-overlay').remove();
    $(window).scrollTop(ScrollPos2);
}

/**
 * Helper Function to get the template function and returns the compiled
 * template string.
 * @param {string} templatePath The path and name of the template you want to use.
 * @param {Object=} data Optional data to be used within the template.
 * @returns {string} Returned compiled template.
 */
function createTemplate(templatePath, data) {
    var templateString = window.JST[templatePath](data);
    return templateString;
}

function getTemplate($targetContainer, template, templateData){
    var content = createTemplate(template, templateData);
    $targetContainer.html(content);
}

$(document).on('click', '#inquiry-submit', function(e){
    e.preventDefault();
    var nonce = $('#content').data('nonce');
    console.log(nonce);
    var data = {
        action: 'mail_before_submit',
        ajax_nonce: nonce,
        product: $('#inquiry-product-title').text(),
        image: $('#inquiry-image').attr('data-image'),
        email: $('#inquiry-email').val(),
        name: $('#inquiry-name').val(),
        company: $('#inquiry-company').val(),
        phone: $('#inquiry-phone').val(),
        location: $('#inquiry-location').val(),
        message: $('#inquiry-message').val()
    };
    $.post(
        SitePath + '/wp-admin/admin-ajax.php', data, function(response){
            console.warn('The server responded: ' + response);
        }
    );
});