"use strict";

function testWebP(cb) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    cb(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
;
var img = document.querySelectorAll("._ibg");
Array.prototype.forEach.call(img, function (value) {
  if (value.querySelector("img")) {
    value.style.backgroundImage = "url(" + value.querySelector("img").getAttribute("src") + ")";
  }
});
;
var PLACEHOLDER_OPACITY = 0.5;
var inputs = document.querySelectorAll(".input");

if (inputs) {
  [].forEach.call(inputs, function (e) {
    var dv = e.getAttribute("data-value");
    var isPlaceholder = true;
    e.isPlaceholder = isPlaceholder;

    if (dv) {
      e.style.color = "rgba(39, 39, 39, ".concat(PLACEHOLDER_OPACITY, ")");
      e.value = dv;
    }

    e.addEventListener("focus", function () {
      if (isPlaceholder) {
        e.value = "";
        isPlaceholder = false;
        e.isPlaceholder = isPlaceholder;
        e.style.color = "rgba(39, 39, 39, 1)";
      }
    });
    e.addEventListener("blur", function () {
      if (e.value === "") {
        e.value = dv;
        isPlaceholder = true;
        e.isPlaceholder = isPlaceholder;
        e.style.color = "rgba(39, 39, 39, ".concat(PLACEHOLDER_OPACITY, ")");
      }
    });
  });
}

var form = document.querySelector(".form");

if (form) {
  form.addEventListener("submit", function (e) {
    if (formValidate(form) === 0) {//
    } else {
      e.preventDefault();
    }
  });
}

function formValidate() {
  var error = 0;
  var formReq = document.querySelectorAll(".req");
  [].forEach.call(formReq, function (e) {
    formRemoveError(e);

    if (e.classList.contains("email")) {
      if (emailTest(e)) {
        formAddError(e);
        error++;
      }
    } else if (e.getAttribute("type") === "checkbox" && e.checked === false) {
      formAddError(e);
      error++;
    } else {
      if (e.value === "" || e.isPlaceholder) {
        formAddError(e);
        error++;
      }
    }
  });
  return error;
}

function formAddError(input) {
  input.parentElement.parentElement.classList.add("_err");
  input.classList.add("_err");
  input.value = "Ошибка";
}

function formRemoveError(input) {
  input.parentElement.parentElement.classList.remove("_err");
  input.classList.remove("_err");
}

function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

;
var w, h;
w = window.outerWidth;
h = window.outerHeight;

function resize() {
  //   adiptiveHeader("header-menu", "header-top-lang", "header-top");
  //   adiptiveHeader("header-menu", "header-bottom-menu", "header-bottom__column");
  adiptiveHeader("menu__body", "actions-header__region", "actions-header");
}

function adiptiveHeader(burgerMenuClass, elementClass, returnPointClass) {
  var burgerMenu = document.querySelector("." + burgerMenuClass);
  var element = document.querySelector("." + elementClass);
  var returnPoint = document.querySelector("." + returnPointClass);

  if (w < 768) {
    if (!element.classList.contains("done")) {
      element.classList.add("done");
      burgerMenu.append(element);
    }
  } else {
    element = burgerMenu.querySelector("." + elementClass);

    if (element) {
      if (element.classList.contains("done")) {
        element.classList.remove("done");

        if (element.classList.contains(elementClass + "--right")) {
          returnPoint.parentNode.lastChild.previousSibling.prepend(element);
        } else {
          returnPoint.prepend(element);
        }
      }
    }
  }
}

window.addEventListener("resize", function () {
  w = window.outerWidth;
  h = window.outerHeight;
  resize();
});
resize(); // let wo, ho, wi, hi;
// wo = window.outerWidth;
// ho = window.outerHeight;
// wi = window.innerWidth;
// hi = window.innerHeight;
// function resize() {
// document.querySelector(".mainblock").style.minHeight = hi + "px";
// }
// window.addEventListener("resize", () => {
//   wo = window.outerWidth;
//   ho = window.outerHeight;
//   wi = window.innerWidth;
//   hi = window.innerHeight;
//   resize();
// });
// resize();

var menuIcon = document.querySelector(".icon-menu");
var menu = document.querySelector(".menu__body");
var links = document.querySelectorAll(".menu-header__link");
menuIcon.addEventListener("click", function () {
  function toggleClass(c) {
    menuIcon.classList.toggle(c);
    menu.classList.toggle(c);
    [].forEach.call(links, function (lnk) {
      lnk.classList.toggle("active");
    });
    document.body.classList.toggle("lock");
  }

  toggleClass("active");

  function linkCB() {
    toggleClass("active");
    [].forEach.call(links, function (l) {
      l.removeEventListener("click", linkCB);
    });
  }

  [].forEach.call(links, function (l) {
    l.addEventListener("click", linkCB);
  });
});
;
var mySwiper = new Swiper(".main-slider__body", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  autoHeight: false,
  speed: 500,
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },
  // Navigation arrows
  navigation: {
    nextEl: ".control-main-slider__arrow--next",
    prevEl: ".control-main-slider__arrow--prev"
  },
  // And if we need scrollbar
  // scrollbar: {
  // el: '.swiper-scrollbar',
  // },
  breakpoints: {
    320: {},
    768: {
      autoHeight: true
    }
  }
});
var myLotsSwiper = new Swiper(".lots__slide", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  speed: 800,
  // autoHeight: false,
  // slidesPerView: 1,
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },
  // Navigation arrows
  navigation: {
    nextEl: ".lots-slider-next",
    prevEl: ".lots-slider-prev"
  },
  // And if we need scrollbar
  // scrollbar: {
  // el: '.swiper-scrollbar',
  // },
  breakpoints: {
    320: {
      autoHeight: true,
      slidesPerView: 1
    },
    500: {
      slidesPerView: 2
    },
    768: {
      autoHeight: false,
      slidesPerView: 3
    },
    975: {
      slidesPerView: 3
    }
  }
});
var myQuotesSwiper = new Swiper(".slider-quotes__slider", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  speed: 800,
  effect: "fade",
  autoHeight: false,
  slidesPerView: 1,
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },
  // Navigation arrows
  navigation: {
    nextEl: ".control-slider-quotes__circle" // prevEl: ".lots-slider-prev",

  },
  // And if we need scrollbar
  // scrollbar: {
  // el: '.swiper-scrollbar',
  // },
  breakpoints: {
    320: {
      autoHeight: true
    },
    650: {
      autoHeight: false
    }
  }
});
;
var userIcon = document.querySelector(".user-header__icon");
var userMenu = document.querySelector(".user-header__menu");

if (userIcon) {
  userIcon.addEventListener("click", function (e) {
    e.stopPropagation();

    if (userMenu) {
      userMenu.classList.toggle("_active");
    }
  });
  window.addEventListener("click", function (e) {
    if (userMenu) {
      userMenu.classList.remove("_active");
    }
  });
}

var menuHeader = document.querySelector(".header");
var mainBlock = document.querySelector(".mainblock");
var scrolled = false; // first fullscreen parallax effect
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

var gotos = document.querySelectorAll(".goto");

if (gotos) {
  [].forEach.call(gotos, function (e) {
    e.parentNode.addEventListener("click", function () {
      var link = e.getAttribute("href");

      if (link) {
        var box = document.querySelector("." + link.split("#")[1]).getBoundingClientRect();
        window.scrollTo({
          top: box.top + pageYOffset - menuHeader.offsetHeight,
          behavior: "smooth"
        });
      }
    });
  });
} // $(document).ready(function () {
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