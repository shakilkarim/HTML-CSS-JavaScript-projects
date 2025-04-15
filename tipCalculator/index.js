const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");
const tipReduceValue = document.getElementById("reduce");

function calculateTotal() {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  const tipReduce = tipReduceValue.value;

  const totalValue = billValue * (1 + tipValue / 100);

  if (tipReduce) {
    const finalValue = totalValue * (1 - tipReduce / 100);
    console.log(finalValue);

    totalSpan.innerText = finalValue.toFixed(2);
    return;
  }

  totalSpan.innerText = totalValue.toFixed(2);
}

btnEl.addEventListener("click", calculateTotal);
