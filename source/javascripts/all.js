//= require jquery
$(document).ready(function(){

// Init ScrollMagic
  var controller = new ScrollMagic.Controller();

// Create Pin Scene for Intro background-color
  var pinIntro = new ScrollMagic.Scene({
           triggerElement: '.hero-headline',
           triggerHook: 0,
           duration: '50%',
       })
       .setPin('.hero-bcg')
       .addIndicators()
       .addTo(controller);


 	// 		var $bcg = $('#slide01').find('.bcg');
     //
 	// 		var slideParallaxScene = new ScrollMagic.Scene({
 	// 	        triggerElement: '#slide01',
 	// 	        triggerHook: 1,
 	// 	        duration: "100%"
 	// 	    })
 	// 	    .setTween(TweenMax.from($bcg, 1, {y: '-40%', autoAlpha: 0.3, ease:Power0.easeNone}))
 	// 	    .addTo(controller);


    // Create Tween Scene for Intro

 	 //    var introTl = new TimelineMax();
    //
 	 //    introTl
 	 //    	.to($('#intro header'), 0.2, {autoAlpha: 0, ease:Power1.easeNone})
 	 //    	.to($('#intro .bcg'), 1.4, {y: '20%', ease:Power1.easeOut}, '-=0.2')
 	 //    	.to($('#intro'), 0.7, {autoAlpha: 0.7, ease:Power1.easeNone}, '-=1.4');
    //
 	// 	var introScene = new ScrollMagic.Scene({
 	 //        triggerElement: '#intro',
 	 //        triggerHook: 0,
 	 //        duration: "100%"
 	 //    })
 	 //    .setTween(introTl)
 	 //    .addTo(controller);

    // Create Pin Scene for Intro background-color

      // var pinIntro = new ScrollMagic.Scene({
      //     triggerElement: '#cb01',
      //     triggerHook: 0.5,
      //     duration: '30%'
      // })
      // .setPin('#intro .bcg')
      // .addTo(controller);

    // Create Pin Scene for slide1 at the end

      // var pinEnd = new ScrollMagic.Scene({
      //   triggerElement: '#slide01',
      //   triggerHook: 0,
      // })
      // .setPin('#slide01')
      // .addTo(controller);



 	    // change behaviour of controller to animate scroll instead of jump
 	// 	controller.scrollTo(function (newpos) {
 	// 		TweenMax.to(window, 1, {scrollTo: {y: newpos}, ease:Power1.easeInOut});
 	// 	});


    // Modal activation from Bourbon/Refills

    $(function() {
      $("#modal-1").on("change", function() {
        if ($(this).is(":checked")) {
          $("body").addClass("modal-open");
        } else {
          $("body").removeClass("modal-open");
        }
      });

      $(".modal-fade-screen, .modal-close").on("click", function() {
        $(".modal-state:checked").prop("checked", false).change();
      });

      $(".modal-inner").on("click", function(e) {
        e.stopPropagation();
      });
    });

});
