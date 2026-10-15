(() => {
  'use strict';
  const config = window.STUDIO_CONFIG || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const whatsapp = (message) => `https://wa.me/${config.whatsapp || '5511945107378'}?text=${encodeURIComponent(message || config.whatsappMessage || 'Olá! Gostaria de agendar um horário.')}`;

  $$('[data-whatsapp]').forEach((link) => { link.href = whatsapp(); });
  $$('[data-service-whatsapp]').forEach((link) => {
    link.href = whatsapp(config.serviceMessages?.[link.dataset.serviceWhatsapp] || `Olá! Vim pelo site do Studio Gabi Lima e gostaria de saber mais sobre ${link.dataset.serviceWhatsapp}.`);
  });
  $$('[data-instagram]').forEach((link) => { if (config.instagram) link.href = config.instagram; });
  $$('[data-maps]').forEach((link) => { if (config.maps) link.href = config.maps; });
  const year = $('#year'); if (year) year.textContent = String(new Date().getFullYear());

  const header = $('.site-header');
  const toggle = $('.menu-toggle');
  const mobileNav = $('#mobile-menu');
  const setMenuOpen = (open) => {
    if (!toggle || !mobileNav) return;
    mobileNav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    mobileNav.inert = !open;
    document.body.classList.toggle('menu-open', open);
  };
  toggle?.addEventListener('click', () => setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  document.querySelectorAll('#mobile-menu a').forEach((link) => link.addEventListener('click', () => setMenuOpen(false)));
  // Mantém navegação por teclado acessível quando o menu responsivo está aberto.
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab' || !mobileNav?.classList.contains('open')) return;
    const focusables = [toggle, ...mobileNav.querySelectorAll('a[href]')].filter(Boolean);
    if (!focusables.length) return;
    const first = focusables[0], last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first.focus();
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    const wasOpen = mobileNav?.classList.contains('open');
    setMenuOpen(false);
    if (wasOpen) toggle?.focus();
  });
  document.addEventListener('click', (event) => {
    if (mobileNav?.classList.contains('open') && !event.target.closest('.site-header')) setMenuOpen(false);
  });
  window.addEventListener('resize', () => { if (window.innerWidth > 1040) setMenuOpen(false); }, { passive: true });

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    window.requestAnimationFrame(() => {
      header?.classList.toggle('scrolled', window.scrollY > 15);
      ticking = false;
    });
    ticking = true;
  }, { passive: true });

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.07, rootMargin: '0px 0px -20px 0px' });
    $$('.reveal').forEach((element) => revealObserver.observe(element));

    const sections = $$('main section[id]');
    const links = $$('.desktop-nav a');
    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => { link.classList.toggle('active', link.hash === `#${entry.target.id}`); });
      });
    }, { rootMargin: '-25% 0px -62% 0px', threshold: 0 });
    sections.forEach((section) => activeObserver.observe(section));
  } else $$('.reveal').forEach((element) => element.classList.add('visible'));

  // Acessibilidade de serviço: ENTER ou ESPAÇO podem iniciar uma consulta contextual.
  $$('.service-row').forEach((row) => {
    row.addEventListener('keydown', (event) => {
      if (event.target !== row || !['Enter', ' '].includes(event.key)) return;
      event.preventDefault();
      $('.service-action', row)?.click();
    });
  });

  // Galeria com lightbox acessível, navegação por teclado e botão de fechar.
  const dialog = $('#gallery-lightbox');
  const galleryButtons = $$('.gallery-item');
  const dialogImage = $('.lightbox img');
  const count = $('.lightbox-counter');
  let activeIndex = 0;
  let lastTrigger = null;
  const visibleGallery = () => galleryButtons.filter((button) => !button.hidden && getComputedStyle(button).display !== 'none');
  const setImage = (index) => {
    const visible = visibleGallery();
    if (!visible.length || !dialogImage) return;
    activeIndex = (index + visible.length) % visible.length;
    const source = $('img', visible[activeIndex]);
    if (!source) return;
    dialogImage.src = source.currentSrc || source.src;
    dialogImage.alt = source.alt;
    if (count) count.textContent = `${activeIndex + 1} / ${visible.length}`;
  };
  galleryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (!dialog?.showModal || button.hidden) return;
      const index = visibleGallery().indexOf(button);
      if (index < 0) return;
      lastTrigger = button;
      setImage(index);
      dialog.showModal();
      document.body.classList.add('dialog-open');
    });
    button.addEventListener('keydown', (event) => {
      if (dialog?.open || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      const visible = visibleGallery();
      const position = visible.indexOf(button);
      if (position < 0 || visible.length < 2) return;
      event.preventDefault();
      const delta = event.key === 'ArrowRight' ? 1 : -1;
      const target = visible[(position + delta + visible.length) % visible.length];
      target.focus();
      target.scrollIntoView({
        block: 'nearest', inline: 'nearest',
        behavior: window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      });
    });
  });
  const closeLightbox = () => { if (dialog?.open) dialog.close(); };
  $('.lightbox-close')?.addEventListener('click', closeLightbox);
  $('.lightbox-prev')?.addEventListener('click', () => setImage(activeIndex - 1));
  $('.lightbox-next')?.addEventListener('click', () => setImage(activeIndex + 1));
  dialog?.addEventListener('click', (event) => { if (event.target === dialog) closeLightbox(); });
  dialog?.addEventListener('close', () => { document.body.classList.remove('dialog-open'); lastTrigger?.focus(); });
  dialog?.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); setImage(activeIndex - 1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); setImage(activeIndex + 1); }
  });

  // Em dispositivos offline, a diagramação continua legível mesmo sem fotos de demonstração.
  $$('img[src^="https://images.unsplash.com/"]').forEach((img) => {
    img.addEventListener('error', () => { img.style.opacity = '0'; img.parentElement?.classList.add('image-unavailable'); });
  });
})();
