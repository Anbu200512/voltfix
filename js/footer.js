// Shared footer component - rendered into <div id="footer"></div> on every page
(function () {
  var year = new Date().getFullYear();

  var quickLinks = [
    { href: 'index.html', label: 'Home' },
    { href: 'about.html', label: 'About Us' },
    { href: 'services.html', label: 'Services' },
    { href: 'pricing.html', label: 'Pricing' },
    { href: 'gallery.html', label: 'Gallery' },
    { href: 'faq.html', label: 'FAQ' },
    { href: 'contact.html', label: 'Contact' }
  ];

  var services = [
    { label: 'Battery Testing', href: 'services.html' },
    { label: 'Battery Replacement', href: 'services.html' },
    { label: 'Battery Charging', href: 'services.html' },
    { label: 'Alternator Diagnostics', href: 'services.html' },
    { label: 'Starter Motor Diagnostics', href: 'services.html' },
    { label: 'Wiring Repair', href: 'services.html' },
    { label: 'Emergency Assistance', href: 'contact.html' }
  ];

  function quickLinksHtml() {
    return quickLinks.map(function (l) {
      return '              <li><a href="' + l.href + '" class="footer-link">' + l.label + '</a></li>';
    }).join('\n');
  }

  function servicesHtml() {
    return services.map(function (s) {
      return '              <li><a href="' + s.href + '" class="footer-link">' + s.label + '</a></li>';
    }).join('\n');
  }

  var html = [
    '  <footer class="relative overflow-hidden bg-gray-50 dark:bg-gray-950 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800">',
    '    <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-orange-600"></div>',
    '    <div class="pointer-events-none absolute -top-24 right-0 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full"></div>',
    '    <div class="pointer-events-none absolute -bottom-32 -left-24 w-80 h-80 bg-yellow-400/10 blur-3xl rounded-full"></div>',
    '',
    '    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">',
    '      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10">',
    '        <div>',
    '          <a href="index.html" class="inline-flex items-center gap-2 mb-5">',
    '            <div class="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/25">',
    '              <i data-lucide="zap" class="w-5 h-5 text-white"></i>',
    '            </div>',
    '            <span class="text-2xl font-bold text-gradient">VoltFix</span>',
    '          </a>',
    '          <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">',
    '            Your trusted local battery &amp; auto electrical specialists. Fast diagnostics, reliable repairs and honest advice to keep you on the road.',
    '          </p>',
    '          <div class="flex flex-wrap gap-2 mb-6">',
    '            <span class="inline-flex items-center gap-1.5 text-xs font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 px-2.5 py-1 rounded-full"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i> A-Grade Licensed</span>',
    '            <span class="inline-flex items-center gap-1.5 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2.5 py-1 rounded-full"><i data-lucide="shield-check" class="w-3.5 h-3.5"></i> 12-Month Warranty</span>',
    '          </div>',
    '          <div class="flex gap-3">',
    '            <a href="#" aria-label="Facebook" class="footer-social"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>',
    '            <a href="#" aria-label="Instagram" class="footer-social"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>',
    '            <a href="#" aria-label="Twitter" class="footer-social"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></a>',
    '            <a href="#" aria-label="YouTube" class="footer-social"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg></a>',
    '          </div>',
    '        </div>',
    '',
    '        <div>',
    '          <h3 class="text-gray-900 dark:text-white font-semibold mb-5 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-600"></span>Quick Links</h3>',
    '          <ul class="space-y-2.5 text-sm">',
    quickLinksHtml(),
    '          </ul>',
    '        </div>',
    '',
    '        <div>',
    '          <h3 class="text-gray-900 dark:text-white font-semibold mb-5 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-600"></span>Our Services</h3>',
    '          <ul class="space-y-2.5 text-sm">',
    servicesHtml(),
    '          </ul>',
    '        </div>',
    '',
    '        <div>',
    '          <h3 class="text-gray-900 dark:text-white font-semibold mb-5 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-600"></span>Get In Touch</h3>',
    '          <ul class="space-y-3 text-sm">',
    '            <li class="flex items-start gap-3">',
    '              <span class="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0"><i data-lucide="map-pin" class="w-4 h-4 text-orange-600 dark:text-orange-400"></i></span>',
    '              <span>123 Auto Electrical Street<br>Melbourne, VIC 3000</span>',
    '            </li>',
    '            <li class="flex items-center gap-3">',
    '              <span class="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0"><i data-lucide="phone" class="w-4 h-4 text-orange-600 dark:text-orange-400"></i></span>',
    '              <a href="tel:+61391234567" class="footer-link font-medium">+61 3 9123 4567</a>',
    '            </li>',
    '            <li class="flex items-center gap-3">',
    '              <span class="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0"><i data-lucide="mail" class="w-4 h-4 text-orange-600 dark:text-orange-400"></i></span>',
    '              <a href="mailto:info@voltfix.com.au" class="footer-link">info@voltfix.com.au</a>',
    '            </li>',
    '            <li class="flex items-start gap-3">',
    '              <span class="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0"><i data-lucide="clock" class="w-4 h-4 text-orange-600 dark:text-orange-400"></i></span>',
    '              <span>Mon-Fri: 8:00 AM - 5:30 PM<br>Sat: 8:00 AM - 12:00 PM<br>Sun: Closed</span>',
    '            </li>',
    '          </ul>',
    '        </div>',
    '      </div>',
    '',
    '      <div class="border-t border-gray-200 dark:border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">',
    '        <p>&copy; ' + year + ' VoltFix. All rights reserved.</p>',
    '        <div class="flex items-center gap-x-5 gap-y-1 flex-wrap justify-center">',
    '          <a href="#" class="footer-link">Privacy Policy</a>',
    '          <a href="#" class="footer-link">Terms of Service</a>',
    '          <a href="faq.html" class="footer-link">FAQ</a>',
    '          <a href="contact.html" class="footer-link">Book a Service</a>',
    '        </div>',
    '        <p class="flex items-center gap-1.5"><i data-lucide="map-pin" class="w-3.5 h-3.5 text-orange-500"></i> Melbourne, VIC</p>',
    '      </div>',
    '    </div>',
    '  </footer>'
  ].join('\n');

  var placeholder = document.getElementById('footer');
  if (placeholder) {
    placeholder.outerHTML = html;
  }
})();