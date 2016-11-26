//= require jquery

 $(document).ready(function(){

   // Init ScrollMagic
     var controller = new ScrollMagic.Controller();

 			var $bcg = $('#slide01').find('.bcg');

 			var slideParallaxScene = new ScrollMagic.Scene({
 		        triggerElement: '#slide01',
 		        triggerHook: 1,
 		        duration: "100%"
 		    })
 		    .setTween(TweenMax.from($bcg, 1, {y: '-40%', autoAlpha: 0.3, ease:Power0.easeNone}))
 		    .addTo(controller);

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

 	    // change behaviour of controller to animate scroll instead of jump
 		controller.scrollTo(function (newpos) {
 			TweenMax.to(window, 1, {scrollTo: {y: newpos}, ease:Power1.easeInOut});
 		});


});
