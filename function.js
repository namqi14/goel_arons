const next_btn = document.querySelector("#next");
const prev_btn = document.querySelector("#prev");
const slider = document.querySelector(".slider");
let first_slide;
let last_slide;

let projects = [
  {
    title: "Exemplary IT Solutions",
    content:
      "From expertise in design and development to meticulous testing, deployment, and a commitment to upholding the highest quality standards.",
    image: "./bg-img/15.jpg",
  },
  {
    title: "Cutting-Edge Tech Expertise",
    content:
      "Traversing the realms of knowledge, design, production, testing, and unwavering dedication to delivering tech solutions of the highest quality.",
    image: "./bg-img/11.jpg",
  },
  {
    title: "Our Technological Journey",
    content:
      "From know-how to designing, production, testing, and the final delivery with utmost priority given to the quality standards.",
    image: "./bg-img/12.jpg",
  },
  {
    title: "Decades of IT Excellence",
    content:
      "Drawing from extensive experience in design, development, testing, and a tradition of delivering solutions that meet the highest quality benchmarks.",
    image: "./bg-img/13.jpg",
  },
  {
    title: "Global Reach & IT Services",
    content:
      "Bringing expertise from around the world in design, development, testing, and ensuring impeccable quality standards in every global project.",
    image: "./bg-img/14.jpg",
  },
];

projects.forEach(({ title, type, content, image }, i) => {
  const slide = document.createElement("div");
  slide.classList.add("slider__slide");
  slide.style.backgroundImage = "url('" + image + "')";
  if (i == 0) {
    first_slide = slide;

    slide.classList.add("active");
  } else if (i + 1 == projects.length) {
    last_slide = slide;
  }

  const slide_content = document.createElement("div");
  slide_content.classList.add("slider__content");

  const content_title = document.createElement("h1");
  content_title.classList.add("slider__title");
  content_title.textContent = title;

  const content_content = document.createElement("div");
  content_content.classList.add("slider__desc");
  content_content.textContent = content;

  slide_content.appendChild(content_title);
  slide_content.appendChild(content_content);
  slide.appendChild(slide_content);
  slider.appendChild(slide);
});

next_btn.addEventListener("click", () => {
  const active_slide = document.querySelector(".slider__slide.active");
  let nextSibling = active_slide.nextElementSibling;

  if (nextSibling == null) {
    nextSibling = first_slide;
  }

  if (nextSibling.classList.contains("slider__slide")) {
    active_slide.classList.remove("active");
    nextSibling.classList.add("active");
  }
});

prev_btn.addEventListener("click", () => {
  const active_slide = document.querySelector(".slider__slide.active");
  let nextSibling = active_slide.previousElementSibling;

  if (nextSibling == null || !nextSibling.classList.contains("slider__slide")) {
    nextSibling = last_slide;
  }

  if (nextSibling.classList.contains("slider__slide")) {
    active_slide.classList.remove("active");
    nextSibling.classList.add("active");
  }
});


//Card-Carousel

function cardCarousel3d(carousels) {
  var rotateHandler = function (evt) {
    var carousel = this.parentElement;
    if (carousel.classList.contains("card-carousel") === false) {
      var carousel = carousel.parentElement;
    }
    var rotate_int = parseInt(carousel.dataset.rotateInt || 0);
    if (this.classList.contains("counterclockwise")) {
      rotate_int += 1;
    } else if (this.classList.contains("clockwise")) {
      rotate_int -= 1;
    }
    carousel.dataset.rotateInt = rotate_int;
    animate_slider(carousel);
  };
  for (var i = 0; i < carousels.length; i++) {
    var carousel = carousels[i];
    var inner = carousel.querySelector(".inner-carousel");
    var cards = carousel.querySelectorAll(".inner-carousel > div");
    var size = cards.length;
    var panelSize = inner.clientWidth;
    var translateZ = Math.round(panelSize / 2 / Math.tan(Math.PI / size)) * 1.7;
    inner.style.transform = "rotateY(0deg) translateZ(-" + translateZ + "px)";
    var btnLeft = carousel.querySelector(".button-spin.counterclockwise");
    if (btnLeft !== null) {
      btnLeft.addEventListener("click", rotateHandler, false);
    }
    var btnRight = carousel.querySelector(".button-spin.clockwise");
    if (btnRight !== null) {
      btnRight.addEventListener("click", rotateHandler, false);
    }
    animate_slider(carousel);
  }

  function animate_slider(carousel) {
    var rotate_int = parseInt(carousel.dataset.rotateInt || 0);
    var inner = carousel.querySelector(".inner-carousel");
    var cards = carousel.querySelectorAll(".inner-carousel > div");
    var size = cards.length;
    var panelSize = inner.clientWidth;
    var translateZ = Math.round(panelSize / 2 / Math.tan(Math.PI / size)) * 1.7;
    var rotateY = 0;
    var ry = 360 / size;
    rotateY = ry * rotate_int;

    for (var i = 0; i < size; i++) {
      var z = rotate_int * ry + i * ry;
      var child = cards[i];
      child.style.transform =
        "rotateY(" +
        z +
        "deg) translateZ(" +
        translateZ +
        "px) rotateY(" +
        (-z).toString() +
        "deg)";
      child.classList.remove("clockwise");
      child.classList.remove("front");
      child.classList.remove("counterclockwise");
      child.removeEventListener("click", rotateHandler, false);
      var zz = z % 360;
      if (zz === 0) {
        child.classList.add("front");
      } else if (zz === ry || zz === -360 + ry) {
        child.classList.add("clockwise");
        child.addEventListener("click", rotateHandler, false);
      } else if (zz === 360 - ry || zz === 0 - ry) {
        child.classList.add("counterclockwise");
        child.addEventListener("click", rotateHandler, false);
      }
    }
  }
}

cardCarousel3d(document.querySelectorAll(".card-carousel"));

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll("nav ul li a");
  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      const checkbox = document.getElementById("click");
      checkbox.checked = false; // Close the menu
    });
  });
});


//Logo
const cardWrapper = document.querySelector('.card-wrapper')
const cardWrapperChildren = Array.from(cardWrapper.children)
const widthToScroll = cardWrapper.children[0].offsetWidth
const arrowPrev = document.querySelector('.arrow.prev')
const arrowNext = document.querySelector('.arrow.next')
const cardBounding = cardWrapper.getBoundingClientRect()
const column = Math.floor(cardWrapper.offsetWidth / (widthToScroll + 24))
let currScroll = 0
let initPos = 0
let clicked = false

cardWrapperChildren.slice(-column).reverse().forEach(item=> {
  cardWrapper.insertAdjacentHTML('afterbegin', item.outerHTML)
})

cardWrapperChildren.slice(0, column).forEach(item=> {
  cardWrapper.insertAdjacentHTML('beforeend', item.outerHTML)
})

const cardImageAndLink = cardWrapper.querySelectorAll('img, a')
cardImageAndLink.forEach(item=> {
  item.setAttribute('draggable', false)
})

cardWrapper.classList.add('no-smooth')
cardWrapper.scrollLeft = cardWrapper.offsetWidth
cardWrapper.classList.remove('no-smooth')

arrowPrev.onclick = function() {
  cardWrapper.scrollLeft -= widthToScroll
}

arrowNext.onclick = function() {
  cardWrapper.scrollLeft += widthToScroll
}

cardWrapper.onmousedown = function(e) {
  cardWrapper.classList.add('grab')
  initPos = e.clientX - cardBounding.left
  currScroll = cardWrapper.scrollLeft
  clicked = true
}

cardWrapper.onmousemove = function(e) {
  if(clicked) {
    const xPos = e.clientX - cardBounding.left
    cardWrapper.scrollLeft = currScroll + -(xPos - initPos)
  }
}

cardWrapper.onmouseup = mouseUpAndLeave
cardWrapper.onmouseleave = mouseUpAndLeave

function mouseUpAndLeave() {
  cardWrapper.classList.remove('grab')
  clicked = false
}

let autoScroll

cardWrapper.onscroll = function() {
  if(cardWrapper.scrollLeft === 0) {
    cardWrapper.classList.add('no-smooth')
    cardWrapper.scrollLeft = cardWrapper.scrollWidth - (2 * cardWrapper.offsetWidth)
    cardWrapper.classList.remove('no-smooth')
  } else if(cardWrapper.scrollLeft === cardWrapper.scrollWidth - cardWrapper.offsetWidth) {
    cardWrapper.classList.add('no-smooth')
    cardWrapper.scrollLeft = cardWrapper.offsetWidth
    cardWrapper.classList.remove('no-smooth')
  }

  if(autoScroll) {
    clearTimeout(autoScroll)
  }

  autoScroll = setTimeout(()=> {
    cardWrapper.classList.remove('no-smooth')
    cardWrapper.scrollLeft += widthToScroll
  }, 4000)
}