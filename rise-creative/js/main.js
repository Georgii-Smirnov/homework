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

  document.addEventListener('DOMContentLoaded', () => {
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    const errorMessage = document.querySelector('#errorMessage');

    // Открытие и закрытие модальных окон
    document.addEventListener('click', (e) => {
      const target = e.target;

      // Обработка открытия модальных окон
      if (target.matches('#openModalBtn, #openModalBtn-in')) {
        e.preventDefault();
        const modalId = target.id === 'openModalBtn' ? '#modal1' : '#modal2';
        document.querySelector(modalId).classList.add('body--opened-modal-up');
      }

      // Обработка закрытия модальных окон
      if (target.closest('.modal__close-btn') || target.classList.contains('modal__in')) {
        e.preventDefault();
        target.closest('.modal__in').classList.remove('body--opened-modal-up');
      }
    });

    // Проверка совпадения паролей
    const checkPasswords = () => {
      errorMessage.style.display = passwordInputs[0].value !== passwordInputs[1].value ? 'block' : 'none';
    };

    passwordInputs.forEach(input => input.addEventListener('input', checkPasswords));

    // Функция показа/скрытия пароля
    const togglePassword = (input) => {
      input.type = input.type === 'password' ? 'text' : 'password';
    };

    // Присоединение обработчиков событий для кнопок
    document.querySelectorAll('.password-toggle').forEach(toggle => {
      toggle.addEventListener('click', () => {
        const input = toggle.closest('.input-container').querySelector('input[type="password"], input[type="text"]');
        togglePassword(input);
      });
    });
  });

  // Свайпер

  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 2.38,
    spaceBetween: 30,
    navigation: {
      nextEl: '.content-gallery__next',
      prevEl: '.content-gallery__prev',
    },
    breakpoints: {
      801: {
        slidesPerView: 2.38,
        spaceBetween: 30,
      },
      450: { // Настройки для ширины от 800px и ниже
        slidesPerView: 2,
        spaceBetween: 25,
      },
      350: { // Настройки для ширины от 800px и ниже
        slidesPerView: 1,
        spaceBetween: 15,
      },
    },
  });

})();






