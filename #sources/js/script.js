@@include("webp.js");
@@include("ibg.js");
@@include("forms.js");
@@include("responsive.js");
@@include("my_swiper.js");

const userIcon = document.querySelector(".user-header__icon");
const userMenu = document.querySelector(".user-header__menu");

if (userIcon) {
  userIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    if (userMenu) {
      userMenu.classList.toggle("_active");
    }
  });
  window.addEventListener("click", (e) => {
    if (userMenu) {
      userMenu.classList.remove("_active");
    }
  });
}

const menuHeader = document.querySelector(".header");
const mainBlock = document.querySelector(".mainblock");
let scrolled = false;
const blocks = [];
let current = 0;

// first fullscreen parallax effect

// window.addEventListener("scroll", () => {
//   const s = pageYOffset / 2;
//   document.querySelector(
//     ".mainblock__bg"
//   ).style.transform = `translate3d(0, ${s}px, 0)`;

//   if (pageYOffset > 0) {
//     scrolled = true;
//     if (scrolled) {
//       menuHeader.style.backgroundColor = "rgba(34, 34, 34, 1)";
//       // mainBlock.style.marginTop = `${menuHeader.offsetHeight}px`;
//     }
//   } else {
//     scrolled = false;
//     // mainBlock.style.marginTop = `0px`;
//     menuHeader.style.backgroundColor = "transparent";
//   }
// });

//smooth scroll from first fullscreen to content
const gotos = document.querySelectorAll("._goto");
if (gotos) {
  [].forEach.call(gotos, (e) => {
    e.parentNode.addEventListener("click", () => {
      if (menuIcon) {
        if (menuIcon.classList.contains("_active")) {
          toggleClass("_active");
        }
      }
      const link = e.getAttribute("href");
      if (link) {
        const box = document
          .querySelector("." + link.split("#")[1])
          .getBoundingClientRect();
        window.scrollTo({
          top: box.top + pageYOffset - menuHeader.offsetHeight,
          behavior: "smooth",
        });
      }
    });
  });
}

function getBlocks() {
  [].forEach.call(links, (l) => {
    blocks.push(
      document.querySelector("." + l.getAttribute("href").split("#")[1])
    );
  });
}
getBlocks();

window.addEventListener("scroll", (e) => {
  const boxes = [];
  Array.prototype.forEach.call(blocks, (b) => {
    boxes.push(Math.abs(b.getBoundingClientRect().top));
  });
  const min = Math.min(...boxes);
  const i = boxes.indexOf(min);
  if (i != current) {
    current = i;
    Array.prototype.forEach.call(links, (l) => {
      l.classList.remove("_current");
    });
    links[i].classList.add("_current");
  }
});

// $(document).ready(function () {
//   if ($(".team__row").length > 0) {
//     $(".team__row").slick({
//       // autoplay: true,
//       // infinite: false,
//       dots: true,
//       arrows: true,
//       accessibility: false,
//       slidesToShow: 4,
//       slidesToScroll: 4,
//       autoplaySpeed: 3000,
//       adaptiveHeight: true,
//       nextArrow: "<button type='button' class='slick-next'></button>",
//       prevArrow: "<button type='button' class='slick-prev'></button>",
//       responsive: [
//         {
//           breakpoint: 767,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//           },
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             dots: false,
//           },
//         },
//       ],
//     });
//   }
// });
