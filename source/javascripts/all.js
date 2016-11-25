//= require jquery
$(document).ready(function(){

// Init ScrollMagic
var controller = new ScrollMagic.Controller();

// pin bcg1

var pinBcg1 = new ScrollMagic.Scene({
  triggerElement: '.bcg1',
  triggerHook: 0,
  duration: 200
})
  .setPin('.bcg1')
  .addIndicators({
    name: 'bcg1'
  })
  .addTo(controller);



var pinBcg2 = new ScrollMagic.Scene({
  triggerElement: '.bcg2',
  triggerHook: 0
})
  .setPin('.bcg2')
  .addIndicators()
  .addTo(controller);

});
