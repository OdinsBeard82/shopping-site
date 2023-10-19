const { doc } = require("prettier");

document.addEventListener("DOMContentLoaded", function () {
  var chairElements = document.querySelectorAll(".product2");

  chairElements.forEach(function (chairElement) {
    chairElement.addEventListener("click", function () {
      window.location = "./products.html";
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    var cartElements = document.querySelectorAll(".addToCart");
    
    cartElements.forEach(function (cartElement) {
      cartElement.addEventListener("click", function () {
        let img = document.createElement("img");
        img.src = cartElement.getAttribute("data-element-imageurl"); 
  
        let cart = document.getElementById("cart");
        cart.appendChild(img);
      });
    });
  });
});