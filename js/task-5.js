// Вариант 1 (через массив)

const checkForSpam = function (message) {
  const spamArray = ['spam', 'sale'];
  for (const stopWord of spamArray) {
    spamMessage = message.toLowerCase().includes(stopWord);
    if (spamMessage) {
      return true;
    }
  }
  return false;
};

// Вариант 2 (рабочий)

// const checkForSpam = function (message) {
//   let stopWord =
//     message.toLowerCase().includes('spam') ||
//     message.toLowerCase().includes('sale');

//   stopWord === true ? stopWord : message;
//   return stopWord;
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// 1. Нормализовать строки, привести в нижний регистр
// 2. Проверить на содержание стоп-слов с помощью includes
// 3. В случае true или false, вернуть соответствующее значение

/*
 * Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
 * Функция проверяет ее на содержание слов spam и sale.
 * Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет
 * функция возвращает false. Слова в строке могут быть в произвольном регистре.
 */
