'use strict';
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');

// Adding fading navigation
const navHandleHover = function (e, opacity) {
  const logo = document.querySelector('.logo');

  if (e.target.classList.contains('link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.link');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = opacity;
      }
    });
    logo.style.opacity = opacity;
  }
};

nav.addEventListener('mouseover', function (e) {
  navHandleHover(e, 0.5);
});

nav.addEventListener('mouseout', function (e) {
  navHandleHover(e, 1);
});

////////// Adding Sticky navigation

// To get the heigth of the Nav
const navHeigth = nav.getBoundingClientRect().height;
console.log(navHeigth);

const headerObserver = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeigth}px`,
  }
);

headerObserver.observe(header);
