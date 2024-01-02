let popupMain = document.querySelector(".popup-main");
let button = document.querySelector(".clickMe");
let xmark = popupMain.querySelector(".fa-circle-xmark");

button.addEventListener("click", function () {
  popupMain.style.top = "0%";
});

xmark.addEventListener("click", function () {
  popupMain.style.top = "100%";
});
