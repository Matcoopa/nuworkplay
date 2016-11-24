//= require jquery
$(document).ready(function(){

// Init ScrollMagic
var controller = new ScrollMagic.Controller();

// pin bcg1
var pinBcg1 = new ScrollMagic.Scene({
  triggerElement: '.bcg-parallax',
  triggerHook: 0,
  duration: '50%'
})
  .setPin('.bcg1')
  .addIndicators()
  .addTo(controller);



var pinBcg2 = new ScrollMagic.Scene({
  triggerElement: '.bcg2',
  triggerHook: 0,
  duration: 300
})
  .setPin('bcg2')
  .addIndicators()
  .addTo(controller);

});
