const variable = "Mathematics";
//.length
console.log(variable.length);
//.charAt()
console.log(variable.charAt(4));
//.indexOf()
console.log(variable.indexOf("he"));
//.lastIndexOf()
console.log(variable.lastIndexOf("a"));
//.slice()
console.log(variable.slice(2, 5));
//.toUpperCase()
console.log(variable.toUpperCase());
//.toLowerCase()
console.log(variable.toLowerCase());
//.includes()
console.log(variable.includes("a"));
//.split()
console.log(variable.split("h"));

const number = 42;
const float = 42.42;
//.isInteger()
console.log(Number.isInteger(number));
console.log(Number.isInteger(float));
//.parseFloat()
console.log(parseFloat(number));
//.toFixed()
console.log(float.toFixed(1));
//.parseInt()
console.log(parseInt(float));
//.toString()
console.log(number.toString());
//chaining
console.log(variable.length.toString());
//.isNaN()
console.log(Number.isNaN(NaN));