//= require jquery

// Init segment analytics
!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="4.0.0";
analytics.load("bsayEDUL1nzUER1hCGGk0PS6xZjKZhQJ");
analytics.page();
}}();

// Init segment identity

analytics.ready(function(){
            var user = analytics.user();
            var anonymousId  = user.anonymousId();
        });

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

// SlideJS
// $(function() {
//       $('#slides').slidesjs({
//         width: 940,
//         height: 528,
//         play: {
//           active: true,
//           auto: false,
//           interval: 4000,
//           swap: true
//         }
//       });
//     });

// Slick carroussel
$(document).ready(function(){
  $('.pic-slides').slick({
    setting-name: setting-value
  });
});


