var link = document.getElementById('cta-click');

analytics.trackLink(link, 'Clicked Quotation CTA', {
  view: 'Landing_top'
});

var form = document.getElementById('ctaForm');

analytics.trackForm(form, 'Get in touch Form', {
  view: 'Landing_bottom',
  lead: 'test'
});
