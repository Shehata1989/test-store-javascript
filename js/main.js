
var addBtn = document.querySelectorAll(".add-to-cart-btn");
var showCart = document.querySelector(".show-cart");
var total = 0;

addBtn.forEach(function (btn) {
  btn.onclick = function () {
    var card = btn.closest(".product-card");
    var name = card.querySelector("h3").textContent;
    var price = card.querySelector(".price").textContent;

    showCart.style.display = "block";
    showCart.innerHTML += name + " - " + price + "<br>";
    total += parseInt(price);
    document.querySelector(".total").textContent = "الإجمالي: " +total + " جنيه";
  };
});




