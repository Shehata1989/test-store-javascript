// var number = prompt("Enter a number");

// for (var i = 0; i <= number; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// var salary = prompt("Enter your salary");

// if (salary >= 17000) {
//     console.log("ثرى")
// } else if (salary >= 9000 && salary < 17000) {
//     console.log("غنى")
// } else {
//     console.log("ماشيه بستر")
// }

// var subject1 = prompt("Enter your grade in subject 1:");
// var subject2 = prompt("Enter your grade in subject 2:");
// var subject3 = prompt("Enter your grade in subject 3:");
// var subject4 = prompt("Enter your grade in subject 4:");
// var subject5 = prompt("Enter your grade in subject 5:");
// var subject6 = prompt("Enter your grade in subject 6:");

// var total = +subject1 + +subject2 + +subject3 + +subject4 + +subject5 + +subject6;

// var percentage = (total / 600) * 100;

// console.log("Your Percentage: " + percentage + "%");

// if (percentage >= 85) {
//   console.log("Excellent (ممتاز)");
// } else if (percentage >= 75) {
//   console.log("Very Good (جيد جدًا)");
// } else if (percentage >= 65) {
//   console.log("Good (جيد)");
// } else if (percentage >= 50) {
//   console.log("Pass (ناجح)");
// } else {
//   console.log("Fail (راسب)");
// }

// var number1 = prompt("Enter the first number:");
// var number2 = prompt("Enter the second number:");

// var sum = +number1 + +number2;
// var mul = +number1 * +number2;

// for (var i = sum; i <= mul; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// }

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




