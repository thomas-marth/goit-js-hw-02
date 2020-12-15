const findLongestWord = function (string) {
  const array = string.split(' ');
  let word = '';

  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > word.length) {
      word = array[i];
    }
  }
  return word;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
