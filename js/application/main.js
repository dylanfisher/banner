// Primary Javascript file

$(function() {
	//
	// Define variables
	//
	var docHeight = $(document).height(),
		docWidth = $(document).width();

	//
	// Call functions
	//
	// setInterval(function(){infoBoxPos();}, 500);
	infoBoxPos();
	navHover();

	//
	// Define functions
	//
	function navHover(){
		$('#menu-primary-nav').mouseenter(function(){
			$('body:not(.home) header').after('<div id="fade-overlay" class="fade-overlay"></div>');
		});
		$('#menu-primary-nav li:first-child').mouseenter(function(){
			$('#menu-primary-nav').addClass('active');
			$('#breadcrumbs').hide();
		});
		$('#menu-primary-nav').mouseleave(function(){
			$('#menu-primary-nav').removeClass('active');
			$('#fade-overlay').remove();
			$('#breadcrumbs').show();
		});
	}
	function infoBoxPos(){
		var infoBoxHeight = $('#info-box').outerHeight(true),
			infoBoxWidth = $('#info-box').outerWidth(true),
			infoBoxPosY = Math.floor(Math.random() * (docHeight - infoBoxHeight)),
			infoBoxPosX = Math.floor(Math.random() * (docWidth - infoBoxWidth));
		$('#info-box').css({
			display: 'block',
			top: infoBoxPosY,
			left: infoBoxPosX
		});
	}
});