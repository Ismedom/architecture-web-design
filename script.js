const barWrapper = document.querySelector(".bar-wrapper");
const listItemWrapper = document.querySelector(".nav-list-item");
const person = document.querySelectorAll(".person-container>article");
const textWrapper = document.querySelectorAll(".ar-person .text-wrapper");
const header = document.querySelector(".header");
const closeButton = document.querySelector("button.close");
//
function ChangePadding() {
  if (person[0].offsetWidth < 350) {
    textWrapper[0].style.paddingLeft = 5 + "px";
    textWrapper[1].style.paddingRight = 5 + "px";
    textWrapper[2].style.paddingLeft = 5 + "px";
  } else {
    textWrapper[0].style.paddingLeft = 20 + "%";
    textWrapper[1].style.paddingRight = 20 + "%";
    textWrapper[2].style.paddingLeft = 20 + "%";
  }
  //
  if (document.body.offsetWidth > 768) {
    document.body.style.overflowY = "auto";
  } else {
    if (barWrapper.classList.contains("active")) {
      document.body.style.overflowY = "hidden";
    }
  }
}
window.addEventListener("resize", ChangePadding);
barWrapper.addEventListener("click", () => {
  barWrapper.classList.toggle("active");
  if (barWrapper.classList.contains("active")) {
    listItemWrapper.style.animation = "toBottom 0.3s forwards";
    document.body.style.overflowY = "hidden";
  } else {
    listItemWrapper.style.animation = "toTop 0.5s forwards";
    document.body.style.overflowY = "auto";
  }
});
header.addEventListener("click", () => {
  if (barWrapper.classList.contains("active")) {
    listItemWrapper.style.animation = "toTop 0.5s forwards";
    document.body.style.overflowY = "auto";
    barWrapper.classList.remove("active");
  }
});
closeButton.addEventListener("click", () => {
  if (barWrapper.classList.contains("active")) {
    listItemWrapper.style.animation = "toTop 0.5s forwards";
    document.body.style.overflowY = "auto";
    barWrapper.classList.remove("active");
  }
});
