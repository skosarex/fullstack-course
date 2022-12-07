// Найди элементы по id
let appleCountNode = document.querySelector(`#appleCount`);
let applePriceNode = document.querySelector(`#applePrice`);
let totalNode = document.querySelector(`#total`);

// Прочитай из HTML числа
let appleCount = appleCountNode.innerHTML;
let applePrice = applePriceNode.innerHTML;

// Выведи в элемент totalNode произведение количества на цену
totalNode.innerHTML = applePrice * appleCount;

