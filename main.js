$(".list-comic-top").slick({
  prevArrow:
    "<button type='button' class='slick-prev '><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next '><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 600,
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 600,
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 740,
      settings: {
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 600,
        slidesToShow: 2,
      },
    },
  ],
});

const iconBar = document.querySelector(".button-nav i");
const nav = document.querySelector(".nav");
const headerSearch = document.querySelector('.header-search')
const headerLeft = document.querySelector('.header-left')
const body = document.querySelector('body')
iconBar.addEventListener("click", () => {
  iconBar.classList.toggle("fa-times")
  nav.classList.toggle("open");
  headerSearch.classList.toggle('open')
  headerLeft.classList.toggle('open')
  body.classList.toggle('open')
});
