let form = document.getElementById("input-container");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let tip = document.getElementById("tip");
  let total = document.getElementById("total");
  tip.innerHTML = "";
  total.innerHTML = "";
  let bill = Number(document.getElementById("bill").value);
  let percentage = Number(document.getElementById("percentage").value / 100);
  let totalTip = bill * percentage;
  let totalBill = bill * percentage + bill;
  if (bill > 0 && percentage > 0) {
    tip.innerHTML = `<h2>TIP $${totalTip.toFixed(2)}</h2>`;
    total.innerHTML = `<h2>TOTAL $${totalBill.toFixed(2)}</h2>`;
    console.log(bill, percentage, bill * percentage + bill);
  } else {
    tip.innerHTML = `<h2>You must enter a bill total and a tip percentage!</h2>`;
  }
  bill = "";
  percentage = "";
});
