function incressAndDecress(product, price, total, isAdd) {
  const productInput = document.getElementById(product + "-input");
  const productInputTaxt = parseInt(productInput.value);
  if (isAdd == true) {
    productInput.value = productInputTaxt + 1;
  } else if (productInput.value > 1) {
    productInput.value = productInputTaxt - 1;
  }
  const priceTotal = document.getElementById(total + "-total");
  priceTotal.innerText = productInput.value * price;
}

//update mobile
document.getElementById("phone-plus").addEventListener("click", function () {
  incressAndDecress("phone", 1219, "phone", true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  incressAndDecress("phone", 1219, "phone", false);
});

// update cases
document.getElementById("case-plus").addEventListener("click", function () {
  incressAndDecress("case", 59, "case", true);
});
document.getElementById("case-minus").addEventListener("click", function () {
  incressAndDecress("case", 59, "case", false);
});
