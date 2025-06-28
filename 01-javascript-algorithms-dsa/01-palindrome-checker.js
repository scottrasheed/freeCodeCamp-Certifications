// Palindrome Checker
// Returns true if the input string is a palindrome

function palindrome(str) {
  const cleaned = str.toLowerCase().replace(/[\W_]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

console.log(palindrome("racecar")); // true
