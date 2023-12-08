const bannerImg = document.getElementsByClassName("banner-img")[0];
const spanCircle = document.getElementsByClassName("circles")[0].children;
const imgContainer = document.getElementsByClassName("image-container")[0];
let activeClass = document.getElementsByClassName("active")[0];

const bannerLeft = document.getElementById("bannerLeft");
const bannerRight = document.getElementById("bannerRight");

console.log(activeClass);

Array.from(spanCircle).forEach((el) => {
  el.addEventListener("click", (e) => {
    const targetedCircle = e.target;
    const targetedNum = e.target.className.split("-")[1][0];
    imgContainer.style.transform = `translateX(-${100 * targetedNum}%)`;
    targetedCircle.classList.add("active");
    activeClass.classList.remove("active");
    activeClass = targetedCircle;
  });
});

bannerLeft.addEventListener("click", (e) => {
  let targetedNum = activeClass.className.split("-")[1][0] - 1;

  if (targetedNum < 0) {
    targetedNum = 6;
  }
  imgContainer.style.transform = `translateX(-${100 * targetedNum}%)`;
  spanCircle[targetedNum].classList.add("active");
  activeClass.classList.remove("active");
  activeClass = spanCircle[targetedNum];
});

bannerRight.addEventListener("click", (e) => {
    let targetedNum = Number(activeClass.className.split("-")[1][0]) + 1;
    if (targetedNum > 6) {
      targetedNum = 0;
    }
    imgContainer.style.transform = `translateX(-${100 * targetedNum}%)`;
    spanCircle[targetedNum].classList.add("active");
    activeClass.classList.remove("active");
    activeClass = spanCircle[targetedNum];
  });
  