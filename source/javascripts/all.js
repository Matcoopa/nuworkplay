//= require jquery

 $(document).ready(function(){

	// Init ScrollMagic
    var controller = new ScrollMagic.Controller();


	    // SCENE 4 - parallax effect on each of the slides with bcg
	    // move bcg container when slide gets into the view


			var $bcg = $('#slide01').find('.bcg');

			var slideParallaxScene = new ScrollMagic.Scene({
		        triggerElement: '#slide01',
		        triggerHook: 1,
		        duration: "100%"
		    })
		    .setTween(TweenMax.from($bcg, 1, {y: '-30%', autoAlpha: 0, ease:Power0.easeNone}))
        .addIndicators()
		    .addTo(controller);


	    // SCENE 5 - parallax effect on the intro slide
	    // move bcg container when intro gets out of the the view

	    var introTl = new TimelineMax();
    //
	    introTl
	    	.to($('#intro header'), 0.2, {autoAlpha: 0, ease:Power1.easeNone})
	    	.to($('#intro .bcg'), 1.4, {y: '20%', ease:Power1.easeOut}, '-=0.2')
	    	.to($('#intro .bcg'), 0.2, {autoAlpha: 0.8, ease:Power1.easeNone}, '-=1.4');

		var introScene = new ScrollMagic.Scene({
	        triggerElement: '#intro',
	        triggerHook: 0,
	        duration: "150%"
	    })
	    .setTween(introTl)
      .addIndicators()
	    .addTo(controller);

});
