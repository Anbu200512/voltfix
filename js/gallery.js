// Gallery lightbox + category filters
document.addEventListener('DOMContentLoaded', function () {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  function visibleItems() {
    return Array.from(document.querySelectorAll('.gallery-item:not(.hidden)'));
  }

  const allItems = Array.from(document.querySelectorAll('.gallery-item'));

  if (!lightbox || !lightboxImg || !allItems.length) return;

  let currentIndex = 0;
  let currentList = visibleItems();

  function show(index) {
    if (!currentList.length) return;
    currentIndex = (index + currentList.length) % currentList.length;
    const img = currentList[currentIndex];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = img.alt || '';
  }

  function open(index) {
    currentList = visibleItems();
    show(index);
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    document.body.style.overflow = '';
  }

  allItems.forEach((img, index) => {
    img.classList.add('cursor-pointer');
    img.addEventListener('click', function () {
      const list = visibleItems();
      open(list.indexOf(img));
    });
  });

  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', function () { show(currentIndex - 1); });
  nextBtn.addEventListener('click', function () { show(currentIndex + 1); });

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) close();
  });

  document.addEventListener('keydown', function (e) {
    if (lightbox.classList.contains('hidden')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(currentIndex - 1);
    if (e.key === 'ArrowRight') show(currentIndex + 1);
  });

  const filterBtns = Array.from(document.querySelectorAll('.filter-btn'));
  if (!filterBtns.length) return;

  function applyFilter(filter) {
    allItems.forEach((item) => {
      const card = item.closest('[data-category]');
      const show = filter === 'all' || (card && card.dataset.category === filter);
      card.classList.toggle('hidden', !show);
      item.classList.toggle('hidden', !show);
    });
    filterBtns.forEach((btn) => btn.classList.toggle('is-active', btn.dataset.filter === filter));
    currentList = visibleItems();
    if (!lightbox.classList.contains('hidden') && !currentList.length) close();
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
      applyFilter(btn.dataset.filter);
    });
  });
});
