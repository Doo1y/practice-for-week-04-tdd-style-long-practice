module.exports = function reverseString(string) {
  let reversed = [];
  string.split('').forEach(el => reversed.unshift(el));
  return reversed.join('');
}
