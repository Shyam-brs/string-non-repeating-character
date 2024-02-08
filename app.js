const inputString = document.getElementById("input-string");
const findButton = document.getElementById("find-button");
const result = document.getElementById("result");

findButton.addEventListener("click", () => {
  const str = inputString.value;
  const charFrequency = {};
  let firstNonRepeatingChar = null;

  for (let char of str) {
    if (charFrequency[char]) {
      charFrequency[char]++;
    } else {
      charFrequency[char] = 1;
    }
  }

  for (let char of str) {
    if (charFrequency[char] === 1) {
      firstNonRepeatingChar = char;
      break;
    }
  }

  result.textContent = `The first non-repeating character is: ${firstNonRepeatingChar}`;
});
