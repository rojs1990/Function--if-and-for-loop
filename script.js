const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
  for (let i = 0; i < bill.length; i++) {
    if (bill[i] >= 50 && bill[i] <= 300) {
      tip = bill[i] * 0.15;
      tips.push(tip);
      totals.push(tip + bill[i]);
    } else {
      tip = bill[i] * 0.2;
      tips.push(tip);
      totals.push(tip + bill[i]);
    }
  }
}

function calcAverage(arr) {
  let sum = 0;
  let average = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return (average = sum / arr.length);
}

calcTip(bills);
console.log(calcAverage(totals));

console.log(bills, '\n', tips, '\n', totals);
