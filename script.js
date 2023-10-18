document.addEventListener("DOMContentLoaded", function () {
  var chairElements = document.querySelectorAll(".product2");

  chairElements.forEach(function (chairElement) {
    chairElement.addEventListener("click", function () {
      window.location = "./products.html";
    });
  });
});

