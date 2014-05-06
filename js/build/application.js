/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
window.matchMedia=window.matchMedia||(function(e,f){var c,a=e.documentElement,b=a.firstElementChild||a.firstChild,d=e.createElement("body"),g=e.createElement("div");g.id="mq-test-1";g.style.cssText="position:absolute;top:-100em";d.appendChild(g);return function(h){g.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width: 42px; }</style>';a.insertBefore(d,b);c=g.offsetWidth==42;a.removeChild(d);return{matches:c,media:h}}})(document);
/*! Picturefill - Responsive Images that work today. (and mimic the proposed Picture element with span elements). Author: Scott Jehl, Filament Group, 2012 | License: MIT/GPLv2 */

(function( w ){

	// Enable strict mode
	"use strict";

	w.picturefill = function() {
		var ps = w.document.getElementsByTagName( "span" );

		// Loop the pictures
		for( var i = 0, il = ps.length; i < il; i++ ){
			if( ps[ i ].getAttribute( "data-picture" ) !== null ){

				var sources = ps[ i ].getElementsByTagName( "span" ),
					matches = [];

				// See if which sources match
				for( var j = 0, jl = sources.length; j < jl; j++ ){
					var media = sources[ j ].getAttribute( "data-media" );
					// if there's no media specified, OR w.matchMedia is supported 
					if( !media || ( w.matchMedia && w.matchMedia( media ).matches ) ){
						matches.push( sources[ j ] );
					}
				}

			// Find any existing img element in the picture element
			var picImg = ps[ i ].getElementsByTagName( "img" )[ 0 ];

			if( matches.length ){
				var matchedEl = matches.pop();
				if( !picImg || picImg.parentNode.nodeName === "NOSCRIPT" ){
					picImg = w.document.createElement( "img" );
					picImg.alt = ps[ i ].getAttribute( "data-alt" );
				}
				else if( matchedEl === picImg.parentNode ){
					// Skip further actions if the correct image is already in place
					continue;
				}

				picImg.src =  matchedEl.getAttribute( "data-src" );
				matchedEl.appendChild( picImg );
				picImg.removeAttribute("width");
				picImg.removeAttribute("height");
			}
			else if( picImg ){
				picImg.parentNode.removeChild( picImg );
			}
		}
		}
	};

	// Run on resize and domready (w.load as a fallback)
	if( w.addEventListener ){
		w.addEventListener( "resize", w.picturefill, false );
		w.addEventListener( "DOMContentLoaded", function(){
			w.picturefill();
			// Run once only
			w.removeEventListener( "load", w.picturefill, false );
		}, false );
		w.addEventListener( "load", w.picturefill, false );
	}
	else if( w.attachEvent ){
		w.attachEvent( "onload", w.picturefill );
	}

}( this ));

//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?void(this._wrapped=n):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.6.0";var A=j.each=j.forEach=function(n,t,e){if(null==n)return n;if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return;return n};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var O="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},j.find=j.detect=function(n,t,r){var e;return k(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var k=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:k(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,j.property(t))},j.where=function(n,t){return j.filter(n,j.matches(t))},j.findWhere=function(n,t){return j.find(n,j.matches(t))},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);var e=-1/0,u=-1/0;return A(n,function(n,i,a){var o=t?t.call(r,n,i,a):n;o>u&&(e=n,u=o)}),e},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);var e=1/0,u=1/0;return A(n,function(n,i,a){var o=t?t.call(r,n,i,a):n;u>o&&(e=n,u=o)}),e},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=j.values(n)),n[j.random(n.length-1)]):j.shuffle(n).slice(0,Math.max(0,t))};var E=function(n){return null==n?j.identity:j.isFunction(n)?n:j.property(n)};j.sortBy=function(n,t,r){return t=E(t),j.pluck(j.map(n,function(n,e,u){return{value:n,index:e,criteria:t.call(r,n,e,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=E(r),A(t,function(i,a){var o=r.call(e,i,a,t);n(u,o,i)}),u}};j.groupBy=F(function(n,t,r){j.has(n,t)?n[t].push(r):n[t]=[r]}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=E(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.partition=function(n,t){var r=[],e=[];return A(n,function(n){(t(n)?r:e).push(n)}),[r,e]},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.contains(t,n)})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===j&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:j.now(),a=null,i=n.apply(e,u),e=u=null};return function(){var l=j.now();o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u),e=u=null):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o,c=function(){var l=j.now()-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u),i=u=null))};return function(){i=this,u=arguments,a=j.now();var l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u),i=u=null),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return j.partial(t,n)},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=function(n){if(!j.isObject(n))return[];if(w)return w(n);var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o)&&"constructor"in n&&"constructor"in t)return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.constant=function(n){return function(){return n}},j.property=function(n){return function(t){return t[n]}},j.matches=function(n){return function(t){if(t===n)return!0;for(var r in n)if(n[r]!==t[r])return!1;return!0}},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},j.now=Date.now||function(){return(new Date).getTime()};var T={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};T.unescape=j.invert(T.escape);var I={escape:new RegExp("["+j.keys(T.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(T.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(I[n],function(t){return T[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}}),"function"==typeof define&&define.amd&&define("underscore",[],function(){return j})}).call(this);
//# sourceMappingURL=underscore-min.map
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
  SitePath = window.location.protocol + '//' + window.location.host + '/dev/';
}

$(function(){

    // Product overlay, template and request
    $(document).on('click', '.api-product', function(e){
        e.preventDefault();
        openLightbox();

        apiRequest('get_post', $(this).data('slug'), function(){
            // console.log(APIData);
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
        $(window).scrollTop(0);
    });

    // Press page overlay, template and request
    $(document).on('click', '.api-press', function(e){
        e.preventDefault();
        openLightbox();

        apiRequest('get_post', $(this).data('slug'), function(){
            // console.log(APIData);
            getTemplate($('#lightbox-content'), 'templates/press', APIData);
        });

    });

    // Lightbox close
    $(document).on('click', '#lightbox-close, .lightbox-close', function(e){
        e.preventDefault();
        closeLightbox();
    });
    // Inquiry close
    $(document).on('click', '#inquiry-close, .inquiry-close', function(e){
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
    // Get verbs from the list printed to the <script>, which imports the list via php... messy
    var verbs = $('#loading-verbs').html().split(',');
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
    var honeypot = $('#hp-verification').val();
    // console.log(nonce);
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

    var validation = data.email;
    if(/(.+)@(.+){2,}\.(.+){2,}/.test(validation)){
        validation = true;
    } else {
        validation = false;
    }
    // Submit the form and send the email if email validates,
    // name field is NOT blank, and honeypot IS blank
    if( validation === true && $('#inquiry-name').val() && honeypot === ''){
        $('#inquiry-overlay').append('<div id="fade-overlay" class="fade-overlay"></div>');
        $('#inquiry-overlay').append('<div class="inquiry-overlay-success">Thanks for getting in touch! We received your email and will get in touch shortly.</div>');
        $.post(
            SitePath + '/wp-admin/admin-ajax.php', data, function(response){
                setTimeout(function(){
                    $('#inquiry-overlay').fadeOut(function(){
                        closeInquiry();
                    });
                }, 5000);
            }
         );
    }

    if(validation === false){
        // Validation FAILS: Enter a valid email
        $('#inquiry-email, label[for="inquiry-email"]').addClass('error');
        $(window).scrollTop(0);
    } else {
        $('#inquiry-email, label[for="inquiry-email"]').removeClass('error');
    }

    if( ! $('#inquiry-name').val()){
        // Validation FAILS: Enter a valid name
        $('#inquiry-name, label[for="inquiry-name"]').addClass('error');
        $(window).scrollTop(0);
    } else {
        $('#inquiry-name, label[for="inquiry-name"]').removeClass('error');
    }

    if( honeypot !== ''){
        // Hidden honeypot was filled in, could be spam
        console.error('Sorry, something went wrong. Please try again.');
    }
});

// jQueryUI config

(function() {
	$( ".draggable" ).draggable({
        cancel: "p, input"
    });
})();
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
            $('#info-box .validation').remove();
            $('#info-box').append('<div id="validation" class="validation-success validation"><p>Thanks for joining our newsletter! You should receive a confirmation email shortly.</p></div>');
            $('#validation').hide().fadeIn('fast');
            $.ajax({
                url: '/banner/wp-content/themes/banner/mailchimp-subscribe.php',
                type: 'POST',
                data: {email: emailVal}
            }).fail(function() {
                $('#info-box .validation').remove();
                $('#info-box').append('<div id="validation" class="validation-failed validation"><p>Sorry, it looks like there was a server error preventing you from signing up. We&#39;re looking into it.</p></div>');
                $('#validation').hide().fadeIn('fast');
            });
        } else {
            // Validation failed
            $('#info-box .validation').remove();
            $('#info-box').append('<div id="validation" class="validation-fail validation"><p>&#42; Sorry, it looks like you entered an invalid email address.</p></div>');
            $('#validation').hide().fadeIn('fast');
        }
    }
});
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
'">\n    </div>\n    <div class="col col2 ib">\n        <form>\n            <label for="inquiry-email" class="required">Email<sup>&#42;</sup></label>\n            <input type="email" name="email" id="inquiry-email">\n            <label for="inquiry-name" class="required">Name<sup>&#42;</sup></label>\n            <input type="text" name="name" id="inquiry-name">\n            <label for="inquiry-company">Company</label>\n            <input type="text" name="company" id="inquiry-company">\n            <label for="inquiry-phone">Phone Number</label>\n            <input type="tel" name="phone" id="inquiry-phone">\n            <label for="inquiry-location">Location</label>\n            <input type="text" name="location" id="inquiry-location">\n            <label for="inquiry-message">Message</label>\n            <textarea type="text" name="message" id="inquiry-message" placeholder="Please send me more information about this product."></textarea>\n            <input class="visuallyhidden" type="text" name="verification" id="hp-verification">\n            <br>\n            <div id="inquiry-submit" class="button1 submit-button">Send product inquiry</div>\n        </form>\n    </div>\n</div>\n<div class="button1 inquiry-close mobile">Back</div>\n';

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
__p += '\n  </div>\n</div>\n<div class="button1 lightbox-close mobile">Back</div>\n';

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
'\n        <a class="button1 product-inquiry" href="#">Contact us to purchase</a>\n    </div>\n</div>\n<div class="button1 lightbox-close mobile">Back</div>\n';

}
return __p
};