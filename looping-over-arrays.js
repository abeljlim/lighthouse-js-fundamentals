const amounts = [61.00, 52.25, 112.9, 5.00];
let total = 0;
// Old way
/*for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}*/
// for..of way
for (let amount of amounts) {
  total += amount;
}
console.log("Order total is: ", total);