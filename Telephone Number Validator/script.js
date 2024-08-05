document.getElementById("check-btn").addEventListener("click", () => {
  const userInput = document.getElementById("user-input").value.trim();
  const resultsDiv = document.getElementById("results-div");

  if (!userInput) {
    alert("Please provide a phone number");
    return;
  }

  const isValidPakistaniNumber = (number) => {
    const regex = /^03[0-9]{2}[- ]?[0-9]{7}$/;
    return regex.test(number);
  };

  if (isValidPakistaniNumber(userInput)) {
    resultsDiv.textContent = `Valid Pakistani number: ${userInput}`;
  } else {
    resultsDiv.textContent = `Invalid Pakistani number: ${userInput}`;
  }
});

document.getElementById("clear-btn").addEventListener("click", () => {
  document.getElementById("user-input").value = "";
  document.getElementById("results-div").textContent = "";
});
