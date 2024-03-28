const langsBtn = document.querySelector("#langs");
const langsList = document.querySelector("#langs-list");
const langsListClose = document.querySelector("#langs-close");
const selectLang = document.querySelectorAll(".langs__item");
const flag = document.querySelector("#flag");

const showLangsList = (e) => {
  e.stopPropagation();
  langsList.classList.add("active-langs");
};

const hideLangsList = (e) => {
  e.stopPropagation();
  langsList.classList.remove("active-langs");
};

const docHideLangsList = (e) => {
  const click = e.composedPath().includes(langsList);
  if (!click) {
    langsList.classList.remove("active-langs");
  }
};

const showSelectLang = (e) => {
  const data = e.currentTarget.dataset.lang;
  selectLang.forEach((l) => {
    l.classList.remove("select");
    if (l.dataset.lang == data) {
      l.classList.add("select");
      flag.src = `img/lang-${data}.svg`;
      hideLangsList(e);
    }
  });
};

langsBtn.addEventListener("click", showLangsList);
langsListClose.addEventListener("click", hideLangsList);

new Swiper(".slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1.1,
  spaceBetween: 10,
  breakpoints: {
    430: {
      slidesPerView: 1.5,
    },

    600: {
      slidesPerView: 2,
    },

    700: {
      slidesPerView: 2.3,
    },

    900: {
      slidesPerView: 3,
      spaceBetween: 10,
    },

    1100: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

selectLang.forEach((l) => {
  l.addEventListener("click", showSelectLang);
});

document.addEventListener("click", docHideLangsList);
