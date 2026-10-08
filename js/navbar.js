// Shared navbar component - rendered into <div id="navbar"></div> on every page
(function () {
  var page = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  var homeActive = page === 'index.html' || page === 'home2.html' || page === '';

  var links = [
    { href: 'about.html', label: 'About' },
    { href: 'services.html', label: 'Services' },
    { href: 'pricing.html', label: 'Pricing' },
    { href: 'gallery.html', label: 'Gallery' },
    { href: 'faq.html', label: 'FAQ' },
    { href: 'contact.html', label: 'Contact' }
  ];

  function isCurrent(href) {
    return page === href;
  }

  function desktopLinks() {
    return links.map(function (l) {
      var cls = 'nav-link' + (isCurrent(l.href) ? ' is-active' : '');
      var aria = isCurrent(l.href) ? ' aria-current="page"' : '';
      return '          <a href="' + l.href + '" class="' + cls + '"' + aria + '>' + l.label + '</a>';
    }).join('\n');
  }

  function mobileLinks() {
    return links.map(function (l) {
      var cls = 'mobile-link' + (isCurrent(l.href) ? ' is-active' : '');
      var aria = isCurrent(l.href) ? ' aria-current="page"' : '';
      return '          <a href="' + l.href + '" class="' + cls + '"' + aria + '>' + l.label + '</a>';
    }).join('\n');
  }

  var html = [
    '  <nav id="siteNav" aria-label="Main navigation" class="fixed top-0 left-0 right-0 z-50 bg-white/85 dark:bg-gray-900/85 backdrop-blur-md shadow-sm transition-all duration-300 border-b border-gray-200/60 dark:border-gray-800/60">',
    '    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">',
    '      <div class="flex items-center h-16">',
    '        <a href="index.html" class="group flex items-center gap-2.5 flex-1 min-w-0">',
    '          <div class="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-lg flex items-center justify-center shadow-md shadow-orange-500/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-orange-500/50">',
    '            <i data-lucide="zap" class="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110"></i>',
    '          </div>',
    '          <span class="text-2xl font-bold text-gradient">VoltFix</span>',
    '        </a>',
    '',
    '        <div class="hidden lg:flex items-center justify-center gap-6 xl:gap-7 flex-1">',
    '          <div class="relative">',
    '            <button id="homeDropdownBtn" aria-haspopup="true" aria-expanded="false" aria-controls="homeDropdownMenu" class="nav-link' + (homeActive ? ' is-active' : '') + ' flex items-center gap-1">',
    '              Home',
    '              <i data-lucide="chevron-down" class="dropdown-chevron w-4 h-4 transition-transform duration-300"></i>',
    '            </button>',
    '            <div id="homeDropdownMenu" role="menu" class="dropdown-panel absolute top-full left-0 mt-3 w-52 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200/80 dark:border-gray-700/80 overflow-hidden hidden">',
    '              <a href="index.html" role="menuitem" class="dropdown-item block px-4 py-3 transition-colors rounded-t-xl' + (page === 'index.html' ? ' is-current' : '') + '">Home 1</a>',
    '              <a href="home2.html" role="menuitem" class="dropdown-item block px-4 py-3 transition-colors rounded-b-xl' + (page === 'home2.html' ? ' is-current' : '') + '">Home 2</a>',
    '            </div>',
    '          </div>',
    '',
    desktopLinks(),
    '        </div>',
    '',
    '        <div class="hidden lg:flex items-center justify-end flex-1">',
    '          <div class="flex items-center gap-2 pl-3 border-l border-gray-200 dark:border-gray-700">',
    '            <button id="rtlToggle" class="toggle-btn" title="Toggle RTL/LTR" aria-label="Toggle text direction">',
    '              <i data-lucide="arrow-left-right" class="direction-left w-5 h-5"></i>',
    '              <i data-lucide="arrow-right-left" class="direction-right w-5 h-5 hidden"></i>',
    '            </button>',
    '            <button id="themeToggle" class="toggle-btn" title="Toggle Dark/Light" aria-label="Toggle dark mode">',
    '              <i data-lucide="sun" class="sun-icon w-5 h-5 hidden"></i>',
    '              <i data-lucide="moon" class="moon-icon w-5 h-5"></i>',
    '            </button>',
    '          </div>',
    '        </div>',
    '',
    '        <div class="lg:hidden flex items-center">',
    '          <button id="mobileMenuBtn" aria-label="Toggle menu" aria-expanded="false" aria-controls="mobileMenu" class="toggle-btn">',
    '            <i data-lucide="menu" class="menu-icon w-6 h-6"></i>',
    '            <i data-lucide="x" class="close-icon w-6 h-6 hidden"></i>',
    '          </button>',
    '        </div>',
    '      </div>',
    '',
    '      <div id="mobileMenu" class="mobile-menu lg:hidden">',
    '        <div class="px-2 pt-2 pb-4 space-y-1">',
    '          <button id="mobileHomeDropdownBtn" aria-haspopup="true" aria-expanded="false" aria-controls="mobileHomeDropdownMenu" class="mobile-link w-full flex items-center gap-2">',
    '            Home',
    '            <i data-lucide="chevron-down" class="dropdown-chevron w-4 h-4 transition-transform duration-300"></i>',
    '          </button>',
    '          <div id="mobileHomeDropdownMenu" class="hidden pl-4 space-y-1 pt-1">',
    '            <a href="index.html" class="mobile-link sub-link' + (page === 'index.html' ? ' is-active' : '') + '">Home 1</a>',
    '            <a href="home2.html" class="mobile-link sub-link' + (page === 'home2.html' ? ' is-active' : '') + '">Home 2</a>',
    '          </div>',
    mobileLinks(),
    '        </div>',
    '        <div class="px-2 pb-4 border-t border-gray-200 dark:border-gray-700 pt-2 flex items-center justify-center gap-3">',
    '          <button id="rtlToggleMobile" class="mobile-toggle-btn" aria-label="Toggle text direction"><i data-lucide="arrow-left-right" class="direction-left w-5 h-5"></i><i data-lucide="arrow-right-left" class="direction-right w-5 h-5 hidden"></i></button>',
    '          <button id="themeToggleMobile" class="mobile-toggle-btn" aria-label="Toggle dark mode"><i data-lucide="sun" class="sun-icon w-5 h-5 hidden"></i><i data-lucide="moon" class="moon-icon w-5 h-5"></i></button>',
    '        </div>',
    '      </div>',
    '    </div>',
    '  </nav>'
  ].join('\n');

  var placeholder = document.getElementById('navbar');
  if (placeholder) {
    placeholder.outerHTML = html;
  }
})();
