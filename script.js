function calculateBill() {
  let prev = parseInt(document.getElementById("previous").value);
  let curr = parseInt(document.getElementById("current").value);

  if (isNaN(prev) || isNaN(curr) || curr < prev) {
    document.getElementById("result").innerHTML = "⚠️ Enter valid readings!";
    return;
  }

  let units = curr - prev;
  let cost = 0;

  if (units <= 500) {
    if (units > 0) cost += Math.min(units, 100) * 0;
    if (units > 100) cost += Math.min(units - 100, 100) * 2.25;
    if (units > 200) cost += Math.min(units - 200, 200) * 4.5;
    if (units > 400) cost += Math.min(units - 400, 100) * 6;
  } else {
    if (units > 0) cost += Math.min(units, 100) * 0;
    if (units > 100) cost += Math.min(units - 100, 300) * 4.5;
    if (units > 400) cost += Math.min(units - 400, 100) * 6;
    if (units > 500) cost += Math.min(units - 500, 100) * 8;
    if (units > 600) cost += Math.min(units - 600, 200) * 9;
    if (units > 800) cost += Math.min(units - 800, 200) * 10;
    if (units > 1000) cost += (units - 1000) * 11;
  }

  document.getElementById("result").innerHTML =
    `✅ Units Consumed: ${units} <br> 💰 Bill Amount: ₹${cost.toFixed(2)}`;
}

function clearForm() {
  document.getElementById("previous").value = "";
  document.getElementById("current").value = "";
  document.getElementById("result").innerHTML = "";
}
