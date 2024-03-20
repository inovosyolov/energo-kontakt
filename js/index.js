window.addEventListener("DOMContentLoaded", (event) => {
  let selector = document.querySelector("input[type='tel']");
  let im = new Inputmask("+7 (999) 999-99-99");

  let burger = document.querySelector('.burger');
  let menu = document.querySelector('.nav__wrapper');
  let menuLinks = menu.querySelectorAll('.nav__link');

  burger.addEventListener('click',
    function () {
      burger.classList.toggle('burger_active');
      menu.classList.toggle('nav__wrapper_active');
      document.body.classList.toggle('stop-scroll');
    })

  menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {
      burger.classList.remove('burger_active');
      menu.classList.remove('nav__wrapper_active');
      document.body.classList.remove('stop-scroll');
    })
  })

  im.mask(selector);

  new JustValidate('.form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30,
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
      email: {
        required: true,
        email: true
      },
    },
    messages: {
      name: 'Неверный ввод!',
      tel: 'Неверный ввод!',
      email: 'Неверный ввод!'
    },
  });
});