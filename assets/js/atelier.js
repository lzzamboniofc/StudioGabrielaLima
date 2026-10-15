/* Studio Gabi Lima — experiências visuais e portfólio responsivo, sem dependências. */
(() => {
  'use strict';

  const gallery = document.querySelector('.gallery-grid-refined');
  const filterButtons = [...document.querySelectorAll('.portfolio-filter[data-filter]')];
  const galleryItems = [...document.querySelectorAll('.gallery-grid-refined .gallery-item')];
  const counter = document.querySelector('.portfolio-count');
  if (gallery && filterButtons.length && galleryItems.length) {
    const applyFilter = (filter) => {
      let visible = 0;
      galleryItems.forEach((item) => {
        const show = filter === 'todos' || item.dataset.category === filter;
        item.hidden = !show;
        if (show) visible += 1;
      });
      filterButtons.forEach((button) => {
        const active = button.dataset.filter === filter;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
      });
      if (counter) counter.textContent = visible + (visible === 1 ? ' referência' : ' referências');
      gallery.scrollLeft = 0;
    };
    filterButtons.forEach((button) => {
      button.addEventListener('click', () => applyFilter(button.dataset.filter || 'todos'));
    });
    applyFilter('todos');
  }

  // Comparador: um componente funcional, mas com arte DEMONSTRATIVA até fotos reais.
  const comparison = document.querySelector('[data-comparison]');
  const slider = comparison?.querySelector('.comparison-range');
  if (comparison && slider) {
    const setComparison = () => {
      const value = Math.max(0, Math.min(100, Number(slider.value) || 0));
      comparison.style.setProperty('--compare', value + '%');
    };
    slider.addEventListener('input', setComparison);
    slider.addEventListener('change', setComparison);
    setComparison();
  }

  // Linha de leitura e leve efeito de iluminação na capa.
  const progress = document.querySelector('.reading-progress');
  const heroLeft = document.querySelector('.hero-left');
  let pending = false;
  const updateScroll = () => {
    if (!progress) return;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = height > 0 ? Math.max(0, Math.min(1, window.scrollY / height)) : 0;
    progress.style.transform = 'scaleX(' + ratio.toFixed(4) + ')';
  };
  window.addEventListener('scroll', () => {
    if (pending) return;
    pending = true;
    requestAnimationFrame(() => { updateScroll(); pending = false; });
  }, { passive: true });
  window.addEventListener('resize', updateScroll, { passive: true });
  updateScroll();

  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const pointerFine = window.matchMedia?.('(hover: hover) and (pointer: fine)').matches;
  if (heroLeft && pointerFine && !reduced) {
    let moving = false, x = 72, y = 43;
    heroLeft.addEventListener('pointermove', (event) => {
      const bounds = heroLeft.getBoundingClientRect();
      x = ((event.clientX - bounds.left) / bounds.width) * 100;
      y = ((event.clientY - bounds.top) / bounds.height) * 100;
      if (moving) return;
      moving = true;
      requestAnimationFrame(() => {
        heroLeft.style.setProperty('--hero-x', x.toFixed(1) + '%');
        heroLeft.style.setProperty('--hero-y', y.toFixed(1) + '%');
        moving = false;
      });
    }, { passive: true });
    heroLeft.addEventListener('pointerleave', () => {
      heroLeft.style.removeProperty('--hero-x');
      heroLeft.style.removeProperty('--hero-y');
    }, { passive: true });
  }

  const config = window.STUDIO_CONFIG || {};
  // Vídeo opcional: ao incluir uma URL válida na configuração, substitui a foto da capa.
  const video = document.querySelector('.hero-video');
  const videoSource = typeof config.heroVideoUrl === 'string' ? config.heroVideoUrl.trim() : '';
  if (video && videoSource && !reduced && /^(https?:\/\/|assets\/)/i.test(videoSource)) {
    video.src = videoSource;
    video.hidden = false;
    const disableVideo = () => {
      video.hidden = true;
      video.pause();
      video.removeAttribute('src');
      video.load();
    };
    video.addEventListener('error', disableVideo, { once: true });
    video.play().catch(disableVideo);
    document.addEventListener('visibilitychange', () => {
      if (video.hidden) return;
      if (document.hidden) video.pause();
      else video.play().catch(() => { /* a foto continua como reserva */ });
    });
  }

  // Retrato oficial opcional, sem atribuir fotos ilustrativas à profissional.
  const founderFrame = document.querySelector('.founder-photo-placeholder');
  const founderUrl = typeof config.founderPhotoUrl === 'string' ? config.founderPhotoUrl.trim() : '';
  if (founderFrame && founderUrl && /^(https?:\/\/|assets\/)/i.test(founderUrl)) {
    const img = document.createElement('img');
    img.className = 'founder-official-image';
    img.alt = 'Fotografia oficial de Gabi Lima';
    img.loading = 'lazy';
    img.decoding = 'async';
    img.addEventListener('load', () => founderFrame.classList.add('has-official-image'), { once: true });
    img.addEventListener('error', () => img.remove(), { once: true });
    founderFrame.appendChild(img);
    img.src = founderUrl;
  }
})();
