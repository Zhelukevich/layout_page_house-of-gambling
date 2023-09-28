document.addEventListener('DOMContentLoaded', function () {
  // BURGER

  function switchBurger() {
    const burgerBtn = document.getElementById('burger-btn');
    const burgerMenu = document.querySelector('.burger');

    burgerBtn.addEventListener('click', () => {
      burgerBtn.classList.toggle('burger-animation-btn');
      burgerMenu.classList.toggle('burger-open');
      document.body.style.overflow = 'hidden';

      if (!burgerMenu.classList.contains("burger-open")) {
        document.body.style.overflow = '';
      }


    })

    const outsideClickListener = (event) => {
      if (!burgerBtn.contains(event.target)) {
        burgerBtn.classList.remove('burger-animation-btn');
        burgerMenu.classList.remove('burger-open');
        document.body.style.overflow = '';
      }
    };

    document.addEventListener("click", outsideClickListener);
  }



  // language
  function switchLanguage() {
    const languageBtn = document.getElementById('language');
    const languageIcon = document.getElementById('language-icon');
    const languageSpan = languageBtn.querySelector("span");

    languageBtn.addEventListener('click', () => {
      languageBtn.classList.toggle('switch-language');
      languageIcon.classList.toggle('switch-language-icon');


      if (languageBtn.classList.contains("switch-language")) {
        languageSpan.textContent = "RU";
      } else {
        languageSpan.textContent = "EN";
      }
    })
  }

  switchLanguage();
  switchBurger();
})

