let preloader = document.querySelector(".loading-wrapper");
    function myFunction() {
      preloader.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
    let navbar = document.querySelector("#nav");
    let navmenu = document.querySelector("#navmenu");

    window.onscroll = function () {
      if (window.pageYOffset >= navmenu.offsetTop) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    };

    window.onscroll = () => {
      if (window.scrollY > 100) {
        navbar.classList.add('nav-active');
      } else {
        navbar.classList.remove('nav-active');
      }
    };

if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./serviceworker.js')
          .then((reg) => console.log('Success', reg.scope))
          .catch((err) => console.log('Error', err))
      })
    }

AOS.init();


const ham = document.getElementById("ham");
const burger = document.querySelector(".burger");
const cancel = document.querySelector(".cancel");
const menu = document.getElementById("menu");
const login = document.querySelector(".login-button");

cancel.style.display = "none";

const toggleMenu = () => {
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    cancel.style.display = "none";
    login.style.display = "block";
    burger.style.display = "block";
    //   menu.style.display = "block";
    console.log("open");
  } else {
    menu.classList.add("open");
    login.style.display = "none";
    burger.style.display = "none";
    cancel.style.display = "block";
    //   menu.style.display = "none";
    console.log("close");
  }
};

// select all accordion items
const accItems = document.querySelectorAll(".accordion__item");

// add a click event for all items
accItems.forEach((acc) => acc.addEventListener("click", toggleAcc));

function toggleAcc() {
  // remove active class from all items exept the current item (this)
  accItems.forEach((item) => item != this ? item.classList.remove("accordion__item--active") : null
  );

  // toggle active class on current item
  if (this.classList != "accordion__item--active") {
    this.classList.toggle("accordion__item--active");
  }
}


const backTopElement = document.getElementById("back-top-div");
const minScolledAmountToBackTop = 800;

window.addEventListener("scroll", () => {
  if (window.scrollY < minScolledAmountToBackTop) {
    backTopElement.classList.add("hidden");
  } else {
    backTopElement.classList.remove("hidden");
  }
});

const backTop = () => {
  window.scrollTo(0, 0);
};

backTopElement.addEventListener("click", backTop);
ham.addEventListener("click", toggleMenu);

$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        center: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });
});
