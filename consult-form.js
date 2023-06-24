window.onload = function () {
  (function () {
    emailjs.init("f9wX-tKXzsMQbqYUx");
  })();
  document
    .getElementById("consult-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs
        .sendForm(
          "service_9yzqcdp",
          "template_ti177qj",
          event.target,
          "f9wX-tKXzsMQbqYUx"
        )
        .then(
          function () {
            console.log("SUCCESS!");
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    });
};
