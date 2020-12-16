const formatString = function (string) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка

// 1. Разбить строку на символы включая пробелы и знаки припинания (?)
// 2. Посчитать количество символов в строке
// 3. Удалить или заменить значения начиная с сорокового индекса на ...
// 4. Сджойнить строку и вернуть результат
