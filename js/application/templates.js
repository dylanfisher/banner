this["JST"] = this["JST"] || {};

this["JST"]["templates/inquiry"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="inquiry-close" class="inquiry-close"></div>\n<!-- <a class="nu" href="<?php bloginfo(\'url\') ?>/"><h2 class="logo"></h2></a> -->\n<div class="ibfix">\n    <div class="col col2 ib">\n        <p>Product Inquiry: <span id="inquiry-product-title">' +
((__t = ( title )) == null ? '' : __t) +
'</span></p>\n        <img id="inquiry-image" data-image="' +
((__t = ( acf.featured_image.sizes.medium )) == null ? '' : __t) +
'" src="' +
((__t = ( acf.featured_image.url )) == null ? '' : __t) +
'">\n    </div>\n    <div class="col col2 ib">\n        <form>\n            <label for="inquiry-email" class="required">Email<sup>&#42;</sup></label>\n            <input type="email" name="email" id="inquiry-email">\n            <label for="inquiry-name" class="required">Name<sup>&#42;</sup></label>\n            <input type="text" name="name" id="inquiry-name">\n            <label for="inquiry-company">Company</label>\n            <input type="text" name="company" id="inquiry-company">\n            <label for="inquiry-phone">Phone Number</label>\n            <input type="tel" name="phone" id="inquiry-phone">\n            <label for="inquiry-location">Location</label>\n            <input type="text" name="location" id="inquiry-location">\n            <label for="inquiry-message">Message</label>\n            <textarea type="text" name="message" id="inquiry-message" placeholder="Please send me more information about this product."></textarea>\n            <input class="visuallyhidden" type="text" name="verification" id="hp-verification">\n            <br>\n            <div id="inquiry-submit" class="button1 submit-button">Send product inquiry</div>\n        </form>\n    </div>\n</div>';

}
return __p
};

this["JST"]["templates/press"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="press-overlay">\n  <h3>' +
((__t = ( title )) == null ? '' : __t) +
'</h3>\n  <div>' +
((__t = ( acf.content )) == null ? '' : __t) +
'</div>\n  ';
 if (acf.pdf_link_boolean == false){ ;
__p += '\n      <a href="' +
((__t = ( acf.external_link )) == null ? '' : __t) +
'" target="_blank">' +
((__t = ( acf.link_text )) == null ? '' : __t) +
'</a>\n  ';
 } else { ;
__p += '\n      <a href="' +
((__t = ( acf.pdf_link.url )) == null ? '' : __t) +
'" target="_blank">' +
((__t = ( acf.link_text )) == null ? '' : __t) +
'</a>\n  ';
 } ;
__p += '\n  <div class="image-container">\n  ';
 _.each(acf.images, function (key) { ;
__p += '\n    ';
 _.each(key, function(image){ ;
__p += '\n      <img src="' +
((__t = ( image.url )) == null ? '' : __t) +
'" width="' +
((__t = ( image.width )) == null ? '' : __t) +
'" height="' +
((__t = ( image.height )) == null ? '' : __t) +
'">\n      ';
 }); ;
__p += '\n  ';
 }); ;
__p += '\n  </div>\n</div>';

}
return __p
};

this["JST"]["templates/product"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<ul class="product-images">\n    ';
 _.each(acf.images, function (key) { ;
__p += '\n      ';
 _.each(key, function(image){ ;
__p += '\n            <li><img src="' +
((__t = ( image.url )) == null ? '' : __t) +
'" width="' +
((__t = ( image.width )) == null ? '' : __t) +
'" height="' +
((__t = ( image.height )) == null ? '' : __t) +
'"></li>\n        ';
 }); ;
__p += '\n    ';
 }); ;
__p += '\n</ul>\n<div class="ibfix">\n    <div class="col col2 ib left">\n        <h2 class="product-title">' +
((__t = ( title.toUpperCase() )) == null ? '' : __t) +
'</h2>\n        ' +
((__t = ( acf.description )) == null ? '' : __t) +
'\n        ';
 if(acf.tear_sheet){ ;
__p += '\n            <a class="download-tear-sheet" href="' +
((__t = ( acf.tear_sheet )) == null ? '' : __t) +
'" target="_blank">Download PDF tear sheet</a>\n        ';
 } ;
__p += '\n    </div>\n    <div class="col col2 ib right">\n        ' +
((__t = ( acf.details )) == null ? '' : __t) +
'\n        <a class="button1 product-inquiry" href="#">Contact us to purchase</a>\n    </div>\n</div>';

}
return __p
};