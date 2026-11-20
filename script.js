function calculateBill() {

  let units = Number(
    document.getElementById("usage").value
  );

  if (units <= 0 || !Number.isFinite(units)) {
    alert("Please enter valid electricity units!");
    return;
  }

  // Example calculation: ₹5 per unit
  let bill = units * 5;

  document.getElementById("units").innerText =
    units + " kWh";

  document.getElementById("bill").innerText =
    "₹" + bill;

  if (units > 150) {
    document.getElementById("status").innerText =
      "High Usage";
  } else {
    document.getElementById("status").innerText =
      "Normal";
  }
}
