document.getElementById("open_modal").addEventListener("click", function () {
  document.getElementById("my_modal").classList.add("open");
});

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("my_modal").classList.remove("open");
});

document
  .querySelector("#my_modal .modal_box")
  .addEventListener("click", (event) => {
    event._isClickWithInModal = true;
  });
document.querySelector("#my_modal").addEventListener("click", (event) => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove("open");
});
///////////////////////////////////////2
document.getElementById("open_modal2").addEventListener("click", function () {
  document.getElementById("my_modal2").classList.add("open");
});

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("my_modal2").classList.remove("open");
});

document
  .querySelector("#my_modal2 .modal_box2")
  .addEventListener("click", (event) => {
    event._isClickWithInModal = true;
  });
document.querySelector("#my_modal2").addEventListener("click", (event) => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove("open");
});

///////////////////////////////////////////////3
document.getElementById("open_modal3").addEventListener("click", function () {
  document.getElementById("my_modal3").classList.add("open");
});

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("my_modal").classList.remove("open");
});

document
  .querySelector("#my_modal3 .modal_box3")
  .addEventListener("click", (event) => {
    event._isClickWithInModal = true;
  });
document.querySelector("#my_modal3").addEventListener("click", (event) => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove("open");
});

////////////////////////////////////////////4
document.getElementById("open_modal4").addEventListener("click", function () {
  document.getElementById("my_modal4").classList.add("open");
});

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("my_modal4").classList.remove("open");
});

document
  .querySelector("#my_modal4 .modal_box4")
  .addEventListener("click", (event) => {
    event._isClickWithInModal = true;
  });
document.querySelector("#my_modal4").addEventListener("click", (event) => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove("open");
});
