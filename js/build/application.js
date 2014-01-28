// jQueryUI config

(function() {
	$( ".draggable" ).draggable();
})();
// Primary Javascript file

(function() {
	//
	// Define variables
	//
	var docHeight = $(document).height(),
		docWidth = $(document).width();

	//
	// Call functions
	//
	infoBoxPos();
	navHover();

	//
	// Functions
	//
	function navHover(){
		$('#menu-primary-nav li:first-child').mouseenter(function(){
			$('#menu-primary-nav').addClass('active');
			$('body:not(.home) header').after('<div id="fade-overlay" class="fade-overlay"></div>');
		});
		$('#menu-primary-nav').mouseleave(function(){
			$('#menu-primary-nav').removeClass('active');
			$('#fade-overlay').remove();
		});
	}
	function infoBoxPos(){
		var infoBoxHeight = $('#info-box').outerWidth(true),
			infoBoxWidth = $('#info-box').outerHeight(true),
			infoBoxPosY = Math.floor(Math.random() * (docHeight - infoBoxHeight)),
			infoBoxPosX = Math.floor(Math.random() * (docWidth - infoBoxWidth));
		$('#info-box').css({
			top: infoBoxPosY,
			left: infoBoxPosX
		});
	}
})();