this["JST"] = this["JST"] || {};

this["JST"]["templates/inquiry"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="logo"></div>\n<div class="ibfix">\n    <div class="col col2 ib">\n        <p>Product Inquiry:<br>' +
((__t = ( title )) == null ? '' : __t) +
'</p>\n        <img src="' +
((__t = ( acf.featured_image.url )) == null ? '' : __t) +
'" width="' +
((__t = ( acf.featured_image.width )) == null ? '' : __t) +
'" height="' +
((__t = ( acf.featured_image.height )) == null ? '' : __t) +
'">\n    </div>\n    <div class="col col2 ib">\n        <form method="post" action="yourFileName.php">\n            <input type="text" name="studentname">\n            <input id="inquiry-submit" type="submit" value="click" name="submit">\n        </form>\n    </div>\n</div>';

}
return __p
};

this["JST"]["templates/product"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h2 class="product-title">' +
((__t = ( title.toUpperCase() )) == null ? '' : __t) +
'</h2>\n<ul class="product-images">\n    ';
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
__p += '\n</ul>\n<div class="ibfix">\n    <div class="col col2 ib">\n        ' +
((__t = ( acf.description )) == null ? '' : __t) +
'\n        <a class="button1 product-inquiry" href="#">Contact us to purchase</a>\n    </div>\n    <div class="col col2 ib">\n        ' +
((__t = ( acf.details )) == null ? '' : __t) +
'\n    </div>\n</div>';

}
return __p
};