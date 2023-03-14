const whichSchool = function (age) {
	if (age < 13) {
		return "Elementary School";
	}
	else if (age <= 18) /* between 13 and 18 inclusive */ {
		return "Secondary School";
	}
	else /* over 18 */ {
		return "Lighthouse Labs";
	}
}


console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));