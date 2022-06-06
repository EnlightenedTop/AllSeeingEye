const eye = document.querySelector(".eye-ball");
const content = document.querySelector(".content--section");
const title = document.querySelector(".title1");
const title2 = document.querySelector(".title2");
const title3 = document.querySelector(".title3");
const title4 = document.querySelector(".title4");
const wholeEye = document.querySelector(".eye");
const eyeBall = document.querySelector(".eye-moving");
eye.style.transform = `rotate(${225}deg)`;
document.documentElement.addEventListener("mousemove", () => {
  let x = event.pageX - eye.getBoundingClientRect().left;
  let y = event.pageY - eye.getBoundingClientRect().top;
  let degree = Math.atan2(x, y);
  let rotation = degree * (180 / Math.PI) * -1 + 50;
  eye.style.transform = `rotate(${rotation}deg)`;
  // console.log(rotation);
  // console.log(y);
  //Best method yet...
  // let x =
  //   event.pageX - Number(eye.getBoundingClientRect().left + eye.clientWidth);
  // let y =
  //   event.pageY - Number(eye.getBoundingClientRect().top + eye.clientHeight);
  // console.log(y);
  // // y = y / 4;

  // // x = x / 7;
  // console.log(y);
  // y > 70 ? (y = 70) : (y = y) && y < 50 ? (y = 50) : (y = y);
  // x > 70 ? (x = 70) : (x = x) && x < 30 ? (x = 30) : (x = x);
  // eye.style.top = y + "%";
  // eye.style.left = x + "%";
  // eye.style.transform = "translate(" + x + "," + y + ")" + "%";
});

// document.documentElement.addEventListener("mouseleave", function () {
//   eye.style.transform = `rotate(${50}deg)`;
// });

const eyeTransfrom = function () {
  eye.style.color = "green";
};

title.addEventListener("mouseover", function () {
  // wholeEye.classList.toggle("eye--big");
  eyeBall.classList.toggle("eye-ball--big");
});
title.addEventListener("mouseleave", function () {
  // wholeEye.classList.toggle("eye--big");
  eyeBall.classList.toggle("eye-ball--big");
});
