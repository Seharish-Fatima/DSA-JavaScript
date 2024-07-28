const convertButton = document.getElementById("convert-btn");
const numberInput = document.getElementById("number");
const result = document.getElementById("result");

const convertToRoman = (num) => {
  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let roman = "";

  romanNumerals.forEach(({ value, numeral }) => {
    while (num >= value) {
      roman += numeral;
      num -= value;
    }
  });

  return roman;
};

const checkUserInput = () => {
  const inputValue = numberInput.value;
  const inputInt = parseInt(inputValue, 10);

  if (!inputValue || isNaN(inputInt)) {
    result.innerText = "Please enter a valid number";
    return;
  }

  if (inputInt < 1) {
    result.innerText = "Please enter a number greater than or equal to 1";
    return;
  }

  if (inputInt >= 4000) {
    result.innerText = "Please enter a number less than or equal to 3999";
    return;
  }

  const romanNumeral = convertToRoman(inputInt);
  result.innerText = `The Roman numeral for ${inputInt} is ${romanNumeral}`;
};

convertButton.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
