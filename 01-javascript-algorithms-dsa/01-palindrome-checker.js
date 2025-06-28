function palindrome(str) {
  const cleaned = str.toLowerCase().replace(/[\W_]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}
