$(function () {
  // Function to handle Slick initialization or destruction based on window width
  handleSlick();
});

function handleSlick() {
  const windowWidth = $(window).width();
  callSlick(windowWidth, ".shop-slider", ".shop-prev", ".shop-next");
  callSlick(windowWidth, ".news-slider", ".news-prev", ".news-next");
}

// Check window size on resize
$(window).resize(function () {
  console.log("asd")
  handleSlick();
});

function callSlick(windowWidth, divContainer, prevBtn, nextBtn) {
  if (windowWidth >= 768) {
    // Initialize Slick slider if it's not initialized
    if (!$(divContainer).hasClass("slick-initialized")) {
      $(divContainer).slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 826,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
        ],
        prevArrow: $(prevBtn),
        nextArrow: $(nextBtn),
      });
    }
  } else {
    // Check if the slider is initialized before unslicking
    if ($(divContainer).hasClass("slick-initialized")) {
      $(divContainer).slick("unslick");
    }
  }
}

const bannerImg = document.getElementsByClassName("banner-img")[0];
const spanCircle = document.getElementsByClassName("circles")[0].children;
const imgContainer = document.getElementsByClassName("image-container")[0];
let activeClass = document.getElementsByClassName("active")[0];

const bannerLeft = document.getElementById("bannerLeft");
const bannerRight = document.getElementById("bannerRight");

const openVideo = document.getElementById("openVideo");
const videoContainer = document.getElementsByClassName("video-container")[0];
const closeVideo = document.getElementById("closeVideo");
const video = document.getElementsByTagName("video")[0];
Array.from(spanCircle).forEach((el) => {
  // adding event listener to all the dots
  el.addEventListener("click", (e) => {
    // storing the clicked element
    const targetedCircle = e.target;
    // taking the number 1 in order to use translate and go to that image place
    const targetedNum = e.target.className.split("-")[1][0];
    // taking the number and adding transfrom to go to the targeted image
    imgContainer.style.transform = `translateX(-${100 * targetedNum}%)`;
    // adding active status to the circle
    targetedCircle.classList.add("active");
    // removing active class from old circle
    activeClass.classList.remove("active");
    //   assinging active elements to the new element that is active
    activeClass = targetedCircle;
  });
});

bannerLeft.addEventListener("click", (e) => {
  // targeting the active class and substracting 1 to go to previous picture
  let targetedNum = activeClass.className.split("-")[1][0] - 1;

  //   if first screen, need to go to the last one
  if (targetedNum < 0) {
    targetedNum = 6;
  }
  //   using transform function to go to the  image
  imgContainer.style.transform = `translateX(-${100 * targetedNum}%)`;
  // adding active status to the circle
  spanCircle[targetedNum].classList.add("active");
  // removing active class from old circle
  activeClass.classList.remove("active");
  //   assinging active elements to the new element that is active
  activeClass = spanCircle[targetedNum];
});

bannerRight.addEventListener("click", (e) => {
  // targeting the active class and substracting 1 to go to previous picture
  let targetedNum = Number(activeClass.className.split("-")[1][0]) + 1;
  //   if last screen, need to go to the first one
  if (targetedNum > 6) {
    targetedNum = 0;
  }
  //   using transform function to go to the  image
  imgContainer.style.transform = `translateX(-${100 * targetedNum}%)`;
  // adding active status to the circle
  spanCircle[targetedNum].classList.add("active");
  // removing active class from old circle
  activeClass.classList.remove("active");
  //   assinging active elements to the new element that is active
  activeClass = spanCircle[targetedNum];
});

// header
const body = document.body;
const btnMenu = document.getElementById("btn-menu-container");
const mainNav = document.getElementById("main-navigation");
// const nav = document.getElementById("main-navigation");

console.log(btnMenu)
btnMenu.addEventListener("click", openMenu);
btnMenu.addEventListener("mousedown", function (e) {
  e.preventDefault();
});

function openMenu() {
  body.classList.toggle("show");
  body.classList.add("animating");
}

window.addEventListener("resize", function () {
  if (window.innerWidth >= 1200) body.classList.add("show");

  if (window.innerWidth < 1200) body.classList.remove("show");
});

openVideo.addEventListener("click", () => {
  videoContainer.style.display = "block";
});

closeVideo.addEventListener("click", () => {
  videoContainer.style.display = "none";
  video.currentTime = 0;
  video.pause();
});
