"use strict";

const nav = document.querySelector("#navbar-solid-bg");
const buttonNav = document.querySelector("#button");
const paintButton = document.querySelector(".paintButton");
const photoButton = document.querySelector(".photoButton");
const videoButton = document.querySelector(".videoButton");
const artItems = document.querySelector(".artItems");
const photoItems = document.querySelector(".photoItems");
const videoItems = document.querySelector(".videoItems");
const video1 = document.querySelector(".video");
const video2 = document.querySelector(".video1");
const overlay = document.getElementById("overlay");

buttonNav.addEventListener("click", function () {
  if (nav.classList.contains("hidden")) {
    nav.classList.remove("hidden");
  } else {
    nav.classList.add("hidden");
  }
});

paintButton.addEventListener("click", function () {
  if (artItems.classList.contains("hidden")) {
    artItems.classList.remove("hidden");
    photoItems.classList.add("hidden");
    videoItems.classList.add("hidden");
    video1.pause();
    video2.pause();
  }
});

photoButton.addEventListener("click", function () {
  if (photoItems.classList.contains("hidden")) {
    photoItems.classList.remove("hidden");
    artItems.classList.add("hidden");
    videoItems.classList.add("hidden");
    video1.pause();
    video2.pause();
  }
});

videoButton.addEventListener("click", function () {
  if (videoItems.classList.contains("hidden")) {
    videoItems.classList.remove("hidden");
    photoItems.classList.add("hidden");
    artItems.classList.add("hidden");
  }
});

let temp;
let cls;
function image(clas) {
  overlay.style.display = "block";

  document.getElementById(`${clas}`).classList.add("img");
  temp = clas;
  console.log(temp);
  cls = document.getElementById(`${temp}`);
  console.log(cls);
}

console.log(temp);
console.log(cls);

overlay.addEventListener("click", function () {
  cls.classList.remove("img");
  overlay.style.display = "none";
});
