// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  // Home Dropdown (desktop)
  const homeDropdownBtn = document.getElementById('homeDropdownBtn');
  const homeDropdownMenu = document.getElementById('homeDropdownMenu');
  
  function closeHomeDropdown() {
    if (homeDropdownMenu && !homeDropdownMenu.classList.contains('hidden')) {
      homeDropdownMenu.classList.add('hidden');
      homeDropdownBtn.setAttribute('aria-expanded', 'false');
    }
  }
  
  if (homeDropdownBtn && homeDropdownMenu) {
    homeDropdownBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const open = homeDropdownMenu.classList.toggle('hidden') === false;
      homeDropdownBtn.setAttribute('aria-expanded', String(open));
    });
    
    document.addEventListener('click', function(ev) {
      if (!homeDropdownBtn.contains(ev.target) && !homeDropdownMenu.contains(ev.target)) {
        closeHomeDropdown();
      }
    });
  }
  
  // Mobile Menu
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  function setMobileMenu(open) {
    if (!mobileMenu || !mobileMenuBtn) return;
    mobileMenu.classList.toggle('active', open);
    mobileMenuBtn.setAttribute('aria-expanded', String(open));
    const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
    const closeIcon = mobileMenuBtn.querySelector('.close-icon');
    if (menuIcon) menuIcon.classList.toggle('hidden', open);
    if (closeIcon) closeIcon.classList.toggle('hidden', !open);
  }
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      setMobileMenu(!mobileMenu.classList.contains('active'));
    });
    
    // Close the menu after tapping any link
    mobileMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        setMobileMenu(false);
      });
    });
  }
  
  // Mobile Home Dropdown
  const mobileHomeDropdownBtn = document.getElementById('mobileHomeDropdownBtn');
  const mobileHomeDropdownMenu = document.getElementById('mobileHomeDropdownMenu');
  
  function closeMobileHomeDropdown() {
    if (mobileHomeDropdownMenu && !mobileHomeDropdownMenu.classList.contains('hidden')) {
      mobileHomeDropdownMenu.classList.add('hidden');
      mobileHomeDropdownBtn.setAttribute('aria-expanded', 'false');
    }
  }
  
  if (mobileHomeDropdownBtn && mobileHomeDropdownMenu) {
    mobileHomeDropdownBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const open = mobileHomeDropdownMenu.classList.toggle('hidden') === false;
      mobileHomeDropdownBtn.setAttribute('aria-expanded', String(open));
    });
  }
  
  // Escape closes any open menu
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeHomeDropdown();
      closeMobileHomeDropdown();
      setMobileMenu(false);
    }
  });
  
  // Navbar shadow on scroll
  const siteNav = document.getElementById('siteNav');
  if (siteNav) {
    const onScroll = function() {
      siteNav.classList.toggle('scrolled', window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
  
  // Dark/Light Mode Toggle
  const themeToggle = document.getElementById('themeToggle');
  const themeToggleMobile = document.getElementById('themeToggleMobile');
  
  function initTheme() {
    const savedTheme = localStorage.getItem('voltfix_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    updateThemeIcons();
  }
  
  function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('voltfix_theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('voltfix_theme', 'dark');
    }
    updateThemeIcons();
  }
  
  function updateThemeIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    const sunIcon = themeToggle?.querySelector('.sun-icon');
    const moonIcon = themeToggle?.querySelector('.moon-icon');
    const sunIconMobile = themeToggleMobile?.querySelector('.sun-icon');
    const moonIconMobile = themeToggleMobile?.querySelector('.moon-icon');
    
    if (sunIcon && moonIcon) {
      sunIcon.classList.toggle('hidden', !isDark);
      moonIcon.classList.toggle('hidden', isDark);
    }
    if (sunIconMobile && moonIconMobile) {
      sunIconMobile.classList.toggle('hidden', !isDark);
      moonIconMobile.classList.toggle('hidden', isDark);
    }
  }
  
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  if (themeToggleMobile) {
    themeToggleMobile.addEventListener('click', toggleTheme);
  }
  
  // RTL/LTR Toggle
  const rtlToggle = document.getElementById('rtlToggle');
  const rtlToggleMobile = document.getElementById('rtlToggleMobile');
  
  function initDirection() {
    const savedDir = localStorage.getItem('voltfix_direction');
    const dir = savedDir || 'ltr';
    document.documentElement.setAttribute('dir', dir);
    updateDirectionIcons();
  }
  
  function toggleDirection() {
    const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
    const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', newDir);
    localStorage.setItem('voltfix_direction', newDir);
    updateDirectionIcons();
  }
  
  function updateDirectionIcons() {
    const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
    const leftIcon = rtlToggle?.querySelector('.direction-left');
    const rightIcon = rtlToggle?.querySelector('.direction-right');
    const leftIconMobile = rtlToggleMobile?.querySelector('.direction-left');
    const rightIconMobile = rtlToggleMobile?.querySelector('.direction-right');
    
    if (leftIcon && rightIcon) {
      leftIcon.classList.toggle('hidden', currentDir === 'rtl');
      rightIcon.classList.toggle('hidden', currentDir === 'ltr');
    }
    if (leftIconMobile && rightIconMobile) {
      leftIconMobile.classList.toggle('hidden', currentDir === 'rtl');
      rightIconMobile.classList.toggle('hidden', currentDir === 'ltr');
    }
  }
  
  if (rtlToggle) {
    rtlToggle.addEventListener('click', toggleDirection);
  }
  if (rtlToggleMobile) {
    rtlToggleMobile.addEventListener('click', toggleDirection);
  }
  
  // Initialize
  initTheme();
  initDirection();
});
