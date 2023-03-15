/*var donuts = ["glazed", "powdered", "sprinkled"];
console.log(donuts[0]); // "glazed" is the first element in the `donuts` array
console.log(donuts[5]); // the fourth element in `donuts` array does not exist!

donuts[1] = "glazed cruller"; // changes the second element in the `donuts` array to "glazed cruller"
console.log(donuts[1]); */

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function (donut, i, donuts) {
  donuts[i] += " hole";
  donuts[i] = donuts[i].toUpperCase();
});
console.log(donuts);