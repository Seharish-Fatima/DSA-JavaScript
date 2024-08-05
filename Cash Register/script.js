let price = 19.5;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const currencyUnit = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  "ONE HUNDRED": 100,
};

function checkCashRegister() {
  const cash = parseFloat(document.getElementById("cash").value);
  let changeDue = cash - price;
  let totalCID = cid.reduce((acc, curr) => acc + curr[1], 0);

  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  if (cash === price) {
    document.getElementById("change-due").innerText =
      "No change due - customer paid with exact cash";
    return;
  }

  if (totalCID < changeDue) {
    document.getElementById("change-due").innerText =
      "Status: INSUFFICIENT_FUNDS";
    return;
  }

  let change = [];
  cid = cid.reverse();

  for (let elem of cid) {
    let curr = elem[0];
    let currTotal = elem[1];
    let amount = 0;
    while (changeDue >= currencyUnit[curr] && currTotal > 0) {
      amount += currencyUnit[curr];
      changeDue -= currencyUnit[curr];
      currTotal -= currencyUnit[curr];
      changeDue = Math.round(changeDue * 100) / 100;
    }
    if (amount > 0) {
      change.push([curr, amount]);
    }
  }

  if (changeDue > 0) {
    document.getElementById("change-due").innerText =
      "Status: INSUFFICIENT_FUNDS";
    return;
  }

  if (totalCID === cash - price) {
    document.getElementById("change-due").innerText = `Status: CLOSED ${change
      .map((item) => item[0] + ": $" + item[1])
      .join(" ")}`;
  } else {
    document.getElementById("change-due").innerText = `Status: OPEN ${change
      .map((item) => item[0] + ": $" + item[1])
      .join(" ")}`;
  }
}

document
  .getElementById("purchase-btn")
  .addEventListener("click", checkCashRegister);
