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


const ham = document.getElementById("ham");
const burger = document.querySelector(".burger");
const cancel = document.querySelector(".cancel");
const menu = document.getElementById("menu");
const loginButton = document.querySelector(".login-button");
const loginForm = document.getElementById("login-form");

cancel.style.display = "none";

const toggleMenu = () => {
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    cancel.style.display = "none";
    burger.style.display = "block";
  } else {
    menu.classList.add("open");
    cancel.style.display = "block";
    burger.style.display = "none";
  }
};

const toggleLoginForm = () => {
  loginForm.classList.toggle("open");
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
loginButton.addEventListener("click", toggleLoginForm);
