(function () {

  // Бургер меню

  document.addEventListener('click', burgerInit)

  function burgerInit(e) {
    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')

    if (!burgerIcon && !burgerNavLink) return
    if (document.documentElement.clientWidth > 900) return

    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    } else {
      document.body.classList.remove('body--opened-menu')
    }
  }

  // Модальное окошко
  const modal = document.querySelector('.modal')
  const modalButton = document.querySelector('.about__img-button')

  modalButton.addEventListener('click', openModal)
  modal.addEventListener('click', closeModal)

  function openModal(e) {
    e.preventDefault()
    document.body.classList.toggle('body--opened-modal')
  }

  function closeModal(e) {
    e.preventDefault()

    const target = e.target

    if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
      document.body.classList.remove('body--opened-modal')
    }
  }

  // Табы

  const tabControls = document.querySelector('.tab-controls');

  tabControls.addEventListener('click', toggleTab);

  function toggleTab(e) {
    const tabControl = e.target.closest('.tab-controls__link');

    if (!tabControl) return;

    e.preventDefault();

    if (tabControl.classList.contains('tab-controls__link--active')) return;

    const tabContentID = tabControl.getAttribute('href');
    const tabContent = document.querySelector(tabContentID);
    const activeControl = document.querySelector('.tab-controls__link--active');
    const activeContent = document.querySelector('.tab-content--show');

    if (activeControl) {
      activeControl.classList.remove('tab-controls__link--active')
    }
    if (activeContent) {
      activeContent.classList.remove('tab-content--show')
    }

    tabControl.classList.add('tab-controls__link--active');
    tabContent.classList.add('tab-content--show');
  }

  // Аккордеон

  const accordionLists = document.querySelectorAll('.accordion-list');

  accordionLists.forEach(list => {
    list.addEventListener('click', e => {
      const accordionControl = e.target.closest('.accordion-list__control');
      if (!accordionControl) return;
      e.preventDefault()
      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      list.querySelectorAll('.accordion-list__item').forEach(item => {
        const content = item.querySelector('.accordion-list__content');
        if (item !== accordionItem && item.classList.contains('accordion-list__item--opened')) {
          item.classList.remove('accordion-list__item--opened');
          content.style.maxHeight = null;
        }
      });

      accordionItem.classList.toggle('accordion-list__item--opened');
      if (accordionItem.classList.contains('accordion-list__item--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = null;
      }
    });
  });

  new Swiper('.gallery__slider',
    {
      slidesPerView: 2,
      spaceBetween: 15,

      pagination: {
        el: '.gallery__pagination',
        type: 'fraction',
      },

      navigation: {
        nextEl: '.gallery__next',
        prevEl: '.gallery__prev',
      },

      breakpoints: {
        601: {
          slidesPerView: 3,
        },

        801: {
          slidesPerView: 4,
          spaceBetween: 32,
        },

        1101: {
          slidesPerView: 4,
        },
      }
    });


  // Слайдер-отзывы

  new Swiper('.testimonials__slider',
    {
      spaceBetween: 0,
      slidesPerView: 1,
      centeredSlides: true,

      navigation: {
        nextEl: '.testimonials__next',
        prevEl: '.testimonials__prev',
      },

      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },

      breakpoints: {
        901: {
          slidesPerView: 1.5,
        },

        1201: {
          slidesPerView: 2.1,
        },
      }
    });

// Маска

  const telInputs = document.querySelectorAll('input[type="tel"]')

  const im = new Inputmask('+7(999) 999-99-99')

  im.mask(telInputs)
})();





