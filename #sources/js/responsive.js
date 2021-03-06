let w, h;
w = window.outerWidth;
h = window.outerHeight;

function resize() {
  //   adiptiveHeader("header-menu", "header-top-lang", "header-top");
  //   adiptiveHeader("header-menu", "header-bottom-menu", "header-bottom__column");
  adiptiveHeader("menu__body", "actions-header__region", "actions-header", 1);
  adiptiveHeader("footer", "footer__info", "footer__column");
}

function adiptiveHeader(
  burgerMenuClass,
  elementClass,
  returnPointClass,
  order = 0
) {
  let burgerMenu = document.querySelector("." + burgerMenuClass);
  let element = document.querySelector("." + elementClass);
  let returnPoint = document.querySelector("." + returnPointClass);
  if (w <= 768) {
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
          returnPoint.parentNode.lastChild.previousSibling.append(element);
        } else {
          if (order == 0) {
            returnPoint.append(element);
          } else {
            returnPoint.prepend(element);
            console.log("pre");
          }
        }
      }
    }
  }
}

window.addEventListener("resize", () => {
  w = window.outerWidth;
  h = window.outerHeight;
  resize();
});

resize();

// let wo, ho, wi, hi;
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

const menuIcon = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu__body");
const links = document.querySelectorAll(".menu__link");

function toggleClass(c) {
  menuIcon.classList.toggle(c);
  menu.classList.toggle(c);
  [].forEach.call(links, (lnk) => {
    lnk.classList.toggle("_active");
  });
  document.body.classList.toggle("lock");
}

menuIcon.addEventListener("click", () => {
  toggleClass("_active");

  function linkCB() {
    toggleClass("_active");
    [].forEach.call(links, (l) => {
      l.removeEventListener("click", linkCB);
    });
  }

  [].forEach.call(links, (l) => {
    l.addEventListener("click", linkCB);
  });
});
