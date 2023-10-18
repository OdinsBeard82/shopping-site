const shoppingCart = []; 

const addToCart = (productId, productName, price) => {
  const existingItem = shoppingCart.find(item => item.productId === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    shoppingCart.push({
      productId,
      productName,
      price,
      quantity: 1
    });
  }

  updateCartDisplay();
}

const removeFromCart = (productId) => {
  const productIndex = shoppingCart.findIndex(item => item.productId === productId);

  if (productIndex !== -1) {
    shoppingCart.splice(productIndex, 1);
  }

  updateCartDisplay();
}

const calculateTotalPrice = () => {
  const totalPrice = shoppingCart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  document.getElementById("total-price").textContent = `$${totalPrice.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.getAttribute("data-product-id");
      const productName = button.getAttribute("data-product-name");
      const price = parseFloat(button.getAttribute("data-product-price"));
      addToCart(productId, productName, price);
      calculateTotalPrice();
    });
  });

  const removeFromCartButtons = document.querySelectorAll(".remove-from-cart-button");
  removeFromCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.getAttribute("data-product-id");
      removeFromCart(productId);
      calculateTotalPrice();
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var chairElements = document.querySelectorAll(".chair");

  chairElements.forEach(function (chairElement) {
    chairElement.addEventListener("click", function () {
      window.location = "./products.html";
    });
  });
});
