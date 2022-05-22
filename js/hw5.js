// 5. Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты.
// Скрипт должен обработать полученный номер и показать на странице последние
// 4 цифры а остальные цифры карты должны заменены на *.

//     **Пример: "Номер вашей карты: **********1245"**
let userCardNumber = 1234567890123456;
let hiddenNumber = String(userCardNumber).slice(0, -4); //извлекаем все цифры кроме последних 4-х цифр
let fourLastNumber = String(userCardNumber).slice(-4); //извлекаем последнии 4 цифры
let replaceNumber = hiddenNumber
    .replace(hiddenNumber, "*")
    .repeat(hiddenNumber.length);
//hiddenNumber заменяем на * и клонируем его на длину hiddenNumber

let hiddenCardNumber = replaceNumber + fourLastNumber;
console.log(hiddenCardNumber);