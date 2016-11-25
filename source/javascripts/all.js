//= require jquery

 $(document).ready(function(){

	// Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    // get all slides
	var slides = ["#slide01"];

	// get all break up sections
	// var breakSections = ["#cb01"];


	    // SCENE 4 - parallax effect on each of the slides with bcg
	    // move bcg container when slide gets into the view
		slides.forEach(function (slide, index) {

			var $bcg = $(slide).find('.bcg');

			var slideParallaxScene = new ScrollMagic.Scene({
		        triggerElement: slide,
		        triggerHook: 1,
		        duration: "100%"
		    })
		    .setTween(TweenMax.from($bcg, 1, {y: '-40%', autoAlpha: 0.3, ease:Power0.easeNone}))
		    .addTo(controller);
	    });

	    // SCENE 5 - parallax effect on the intro slide
	    // move bcg container when intro gets out of the the view

	    var introTl = new TimelineMax();

	    introTl
	    	.to($('#intro header, .scroll-hint'), 0.2, {autoAlpha: 0, ease:Power1.easeNone})
	    	.to($('#intro .bcg'), 1.4, {y: '20%', ease:Power1.easeOut}, '-=0.2')
	    	.to($('#intro'), 0.7, {autoAlpha: 0.5, ease:Power1.easeNone}, '-=1.4');

		var introScene = new ScrollMagic.Scene({
	        triggerElement: '#intro',
	        triggerHook: 0,
	        duration: "100%"
	    })
	    .setTween(introTl)
	    .addTo(controller);

});
