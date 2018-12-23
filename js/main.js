const mobileNav = document.querySelector(".nav-links-mobile");
const mobileNavX = document.querySelector(".nav-links-mobile span");
const hamburgerMenu = document.querySelector(".nav-links img");
const mobileNavATags = document.querySelectorAll('.nav-links-mobile a')

mobileNavATags.forEach(a => {
  a.addEventListener('click', function () {
    mobileNav.style.display = 'none'
  })
})


// close mobile nav with X
mobileNavX.addEventListener("click", function () {
  mobileNav.style.display = "none";
});

hamburgerMenu.addEventListener("click", function () {
  mobileNav.style.display = "block";
});

// FAQ tabs toggle

class TabLink {
  constructor(element) {
    this.element = element;

    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;

    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(
      `.tabs-item[data-tab="${this.data}"]`
    );

    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);

    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener("click", () => {
      this.select();
    });
  }

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll(".tabs-link");

    // changes all FAQ tabs to plus SVG and plus class
    links.forEach(link => {
      link.src = "svg/plus.svg";
      link.classList.remove("minus");
      link.classList.add("plus");
    });

    // change selected FAQ tab to remove SVG and minus class
    this.element.src = "svg/remove.svg";
    this.element.classList.add("minus");

    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    // Select all items elements from the DOM
    const items = document.querySelectorAll(".tabs-item");
    // Remove the class "tabs-item-selected" from each element
    items.forEach(item => {
      item.style.display = "none";
    });

    // Add a class named "tabs-item-selected" to this element
    this.element.style.display = "block";
  }
}

// START HERE: create a reference to the ".tabs" classes
let links = document.querySelectorAll(".tabs-link");

// create array from tab links
links = Array.from(links).map(link => new TabLink(link));

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
links[0].select();

// history carousel init
$(document).ready(function () {
  $(".history-carousel").slick({
    arrows: true,
    dots: true,
    prevArrow: "<img class='a-left control-c prev slick-prev' src='svg/left-arrow.svg'></img>",
    nextArrow: "<img class='a-right control-c next slick-next' src='svg/right-arrow.svg'></img>"
  });
});

// jquery smooth scroll
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
      this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate({
            scrollTop: target.offset().top
          },
          700
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  // $(".js-scroll-trigger").click(function() {
  //   $(".nav-links-mobile").collapse("hide");
  // });

  // Activate scrollspy to add active class to navbar items on scroll
  // $("body").scrollspy({
  //   target: "#mainNav",
  //   offset: 54
  // });
})(jQuery); // End of use strict