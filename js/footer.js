// Shared footer component - rendered into <div id="footer"></div> on every page
(function () {
  var year = new Date().getFullYear();

  var quickLinks = [
    { href: 'index.html', label: 'Home' },
    { href: 'home2.html', label: 'Home 2' },
    { href: 'about.html', label: 'About Us' },
    { href: 'services.html', label: 'Services' },
    { href: 'pricing.html', label: 'Pricing' },
    { href: 'gallery.html', label: 'Gallery' },
    { href: 'faq.html', label: 'FAQ' },
    { href: 'contact.html', label: 'Contact' }
  ];

  var services = [
    'Battery Testing',
    'Battery Replacement',
    'Battery Charging',
    'Alternator Diagnostics',
    'Starter Motor Diagnostics',
    'Wiring Repair',
    'Emergency Assistance'
  ];

  function quickLinksHtml() {
    return quickLinks.map(function (l) {
      return '            <li><a href="' + l.href + '" class="footer-link">' + l.label + '</a></li>';
    }).join('\n');
  }

  function servicesHtml() {
    return services.map(function (s) {
      return '            <li><a href="services.html" class="footer-link">' + s + '</a></li>';
    }).join('\n');
  }

  var html = [
    '  <footer class="bg-gray-900 dark:bg-gray-950 text-gray-300 border-t border-gray-800">',
    '    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">',
    '      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10">',
    '        <div>',
    '          <a href="index.html" class="flex items-center gap-2 mb-4">',
    '            <div class="w-9 h-9 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-lg flex items-center justify-center">',
    '              <i data-lucide="zap" class="w-4 h-4 text-white"></i>',
    '            </div>',
    '            <span class="text-xl font-bold text-gradient">VoltFix</span>',
    '          </a>',
    '          <p class="text-sm text-gray-400 leading-relaxed mb-4">',
    '            Your trusted local battery & auto electrical specialists. Fast diagnostics, reliable repairs and honest advice to keep you on the road.',
    '          </p>',
    '          <div class="flex gap-3">',
    '            <a href="#" aria-label="Facebook" class="footer-social"><i data-lucide="facebook" class="w-4 h-4"></i></a>',
    '            <a href="#" aria-label="Instagram" class="footer-social"><i data-lucide="instagram" class="w-4 h-4"></i></a>',
    '            <a href="#" aria-label="Twitter" class="footer-social"><i data-lucide="twitter" class="w-4 h-4"></i></a>',
    '            <a href="#" aria-label="YouTube" class="footer-social"><i data-lucide="youtube" class="w-4 h-4"></i></a>',
    '          </div>',
    '        </div>',
    '',
    '        <div>',
    '          <h3 class="text-white font-semibold mb-4">Quick Links</h3>',
    '          <ul class="space-y-2 text-sm">',
    quickLinksHtml(),
    '          </ul>',
    '        </div>',
    '',
    '        <div>',
    '          <h3 class="text-white font-semibold mb-4">Our Services</h3>',
    '          <ul class="space-y-2 text-sm">',
    servicesHtml(),
    '          </ul>',
    '        </div>',
    '',
    '        <div>',
    '          <h3 class="text-white font-semibold mb-4">Get In Touch</h3>',
    '          <ul class="space-y-3 text-sm">',
    '            <li class="flex items-start gap-3">',
    '              <i data-lucide="map-pin" class="w-4 h-4 mt-0.5 text-orange-400 flex-shrink-0"></i>',
    '              <span>123 Auto Electrical Street<br>Melbourne, VIC 3000</span>',
    '            </li>',
    '            <li class="flex items-center gap-3">',
    '              <i data-lucide="phone" class="w-4 h-4 text-orange-400 flex-shrink-0"></i>',
    '              <a href="tel:+61391234567" class="footer-link">+61 3 9123 4567</a>',
    '            </li>',
    '            <li class="flex items-center gap-3">',
    '              <i data-lucide="mail" class="w-4 h-4 text-orange-400 flex-shrink-0"></i>',
    '              <a href="mailto:info@voltfix.com.au" class="footer-link">info@voltfix.com.au</a>',
    '            </li>',
    '            <li class="flex items-start gap-3">',
    '              <i data-lucide="clock" class="w-4 h-4 mt-0.5 text-orange-400 flex-shrink-0"></i>',
    '              <span>Mon-Fri: 8:00 AM - 5:30 PM<br>Sat: 8:00 AM - 12:00 PM<br>Sun: Closed</span>',
    '            </li>',
    '          </ul>',
    '        </div>',
    '      </div>',
    '',
    '      <div class="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">',
    '        <p>&copy; ' + year + ' VoltFix. All rights reserved.</p>',
    '        <p>Battery testing &bull; Auto electrical repair &bull; Melbourne</p>',
    '      </div>',
    '    </div>',
    '  </footer>'
  ].join('\n');

  var placeholder = document.getElementById('footer');
  if (placeholder) {
    placeholder.outerHTML = html;
  }
})();
