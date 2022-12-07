let plusNode = document.querySelector(`#plus`);
let minusNode = document.querySelector(`#minus`);
let amountNode = document.querySelector(`#amount`);

// ЗАПИШИ ВСЕ ОТВЕТЫ НИЖЕ С ПРОБЕЛАМИ КАК В ПРЕЗЕНТАЦИИ!!
// ПРОБЕЛЫ НУЖНЫ, ПРОБЕЛЫ ВАЖНЫ :)

// Объяви переменную count со значением 0
let count = 0;

// Добавь обработчик событий на кнопку plusNode
plusNode.addEventListener(`click`, function () {
    count++;
    amountNode.innerHTML = count;
});


minusNode.addEventListener(`click`, function () {
    if (count != 0) {
        count--;
        amountNode.innerHTML = count;
    }
});