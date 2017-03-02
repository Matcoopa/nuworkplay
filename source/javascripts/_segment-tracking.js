// Init segment analytics
!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="4.0.0";
analytics.load("bsayEDUL1nzUER1hCGGk0PS6xZjKZhQJ");
}}();

// Init segment identity

analytics.ready(function(){
            var user = analytics.user();
            var anonymousId  = user.anonymousId();
        });

// Get geodata for DB filling without Mixpanel tools and add custom properties to Page loaded event
$(document).ready(function () {
    $.getJSON('https://freegeoip.net/json/', function (location) {
      var userCity = location.city;
      var userCountry = location.country_name;

      analytics.page('Landing', {
        goal: 'Click to Request Quotation',
        city: userCity,
        country: userCountry
      });
    });
});


// Track cta Click Event - Curious or Interested?

var linkQuotation = document.getElementById('ctaButtonQuotation');


analytics.trackLink(linkQuotation, 'Clicked Quotation CTA', {
  view: 'Landing_top'
});

$( "#userNameId" ).on( "change", function() {
  var userName = document.getElementById('userNameId').value
  analytics.track('Name Filled', {
    step: 'Filling In Process',
    user_name: userName
  })
});

$( "#userMailId" ).on( "change", function() {
  var userMail = document.getElementById('userMailId').value
  analytics.track('Email Filled', {
    step: 'Filling In Process',
    user_email: userMail
  })
});



var form = document.getElementById('ctaForm');

analytics.trackForm(form, 'Get in touch Form', {
  view: 'Landing_bottom',
  lead: 'test'
});


