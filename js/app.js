function incressAndDecress(product, price, isAdd) {
  const productInput = document.getElementById(product + "-input");
  const productInputTaxt = parseInt(productInput.value);
  if (isAdd == true) {
    productInput.value = productInputTaxt + 1;
  } else if (productInput.value > 1) {
    productInput.value = productInputTaxt - 1;
  }
  const priceTotal = document.getElementById(product + "-total");
  priceTotal.innerText = productInput.value * price;
  // update subTotal
  calculateSubtotal();
}

//update mobile
document.getElementById("phone-plus").addEventListener("click", function () {
  incressAndDecress("phone", 1219, true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  incressAndDecress("phone", 1219, false);
});

// update cases
document.getElementById("case-plus").addEventListener("click", function () {
  incressAndDecress("case", 59, true);
});
document.getElementById("case-minus").addEventListener("click", function () {
  incressAndDecress("case", 59, false);
});
function getINput(product) {
  const productInput = document.getElementById(product + "-input");
  const productINputText = parseInt(productInput.value);
  return productINputText;
}
//subtotal
function calculateSubtotal() {
  const phoneTotal = getINput("phone") * 1219;
  const caseTotal = getINput("case") * 59;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal / 10;
  const totalPrice = tax + subTotal;

  //update on the html
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-amount").innerText = tax;
  document.getElementById("total-price").innerText = totalPrice;
}
