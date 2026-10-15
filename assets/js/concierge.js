/* Studio Gabi Lima — curadoria de intenção. Sem coleta nem armazenamento de dados. */
(() => {
  'use strict';

  const root = document.querySelector('#seu-momento');
  if (!root) return;

  const choices = {
    alisamentos: {
      title: 'Alisamentos & Progressivas',
      description: 'Conheça as opções de alinhamento e progressivas orgânicas. A indicação adequada depende de uma avaliação do seu cabelo.',
      service: 'Alisamentos e progressivas',
      goal: 'mais brilho e alinhamento'
    },
    'mega-hair': {
      title: 'Mega Hair',
      description: 'Explore possibilidades de comprimento e volume e converse sobre a avaliação ideal para os seus fios.',
      service: 'Mega hair',
      goal: 'mais comprimento e volume'
    },
    mechas: {
      title: 'Mechas & Iluminação',
      description: 'Descubra opções de luz e dimensão para os cabelos, considerando o seu estilo e o estado dos fios.',
      service: 'Mechas e iluminação',
      goal: 'mais luz e dimensão'
    },
    cortes: {
      title: 'Cortes & Finalizações',
      description: 'Um corte pode renovar a forma, o movimento e a expressão do cabelo. Consulte as possibilidades para você.',
      service: 'Cortes e finalizações',
      goal: 'um novo corte e movimento'
    }
  };

  const buttons = [...root.querySelectorAll('[data-curadoria]')];
  const title = root.querySelector('#curadoria-result-title');
  const description = root.querySelector('#curadoria-result-desc');
  const link = root.querySelector('#curadoria-whatsapp');
  if (!buttons.length || !title || !description || !link) return;

  const update = (key) => {
    const option = choices[key];
    if (!option) return;

    buttons.forEach((button) => {
      const active = button.dataset.curadoria === key;
      button.classList.toggle('is-selected', active);
      button.setAttribute('aria-pressed', String(active));
    });

    title.textContent = option.title;
    description.textContent = option.description;
    const whatsapp = String(window.STUDIO_CONFIG?.whatsapp || '5511945107378').replace(/\D/g, '');
    const message = 'Olá! Vim pelo site do Studio Gabi Lima. Estou buscando ' + option.goal + ' e gostaria de orientação sobre ' + option.service.toLowerCase() + ', valores e horários disponíveis.';
    link.href = 'https://wa.me/' + whatsapp + '?text=' + encodeURIComponent(message);
    link.setAttribute('aria-label', 'Conversar pelo WhatsApp sobre ' + option.service);
  };

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => update(button.dataset.curadoria));
    button.addEventListener('keydown', (event) => {
      if (!['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'].includes(event.key)) return;
      event.preventDefault();
      const direction = ['ArrowDown', 'ArrowRight'].includes(event.key) ? 1 : -1;
      const next = buttons[(index + direction + buttons.length) % buttons.length];
      next.focus();
      update(next.dataset.curadoria);
    });
  });

  update('alisamentos');
})();
