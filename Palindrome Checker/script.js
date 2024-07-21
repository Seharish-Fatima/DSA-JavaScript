document.getElementById("check-btn").addEventListener("click", function () {
  const textInput = document.getElementById("text-input").value.trim();
  const resultDiv = document.getElementById("result");

  if (textInput === "") {
    alert("Please input a value");
  } else {
    const isPalindromeResult = isPalindrome(textInput);
    resultDiv.textContent = `${textInput} is ${
      isPalindromeResult ? "" : "not "
    }a palindrome`;
  }
});

function isPalindrome(str) {
  const remove = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(remove, "");
  const reverseStr = str.split("").reverse().join("");
  return str === reverseStr;
}
