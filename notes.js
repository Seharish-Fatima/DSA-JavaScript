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

//Math
Math.PI();
//removes decimals
Math.trunc();
//rounds to nearest whole number
Math.round();
//rounds up
Math.ceil();
//rounds down
Math.floor();
//power
Math.pow();
//minimum
Math.min();
//maximum
Math.max();
//random number always between 0 &1
Math.random();
//random number between 1 & 10 (replace 10 with the maximum number you want)
Math.floor(Math.random() * 10) + 1; //using math ceil has a chance of getting 0

//code that returns a random letter from a given string
const string = "Seharish";
console.log(string.charAt(Math.floor(Math.random() * string.length)));

// User Input
alert("Hello World");
confirm("Ok === True\nCancel === False");
prompt("Enter your name:");
