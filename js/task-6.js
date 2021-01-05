let input;
let total = 0;

while (true) {

    let input = prompt('введи число');

    if (input === null) {

        console.log('Отменено пользователем!');
        break;
    }

    input = Number(input);

    const notANumber = Number.isNaN(input);

    if (notANumber) {

        alert('Было введено не число, попробуйте еще раз');
        continue;
    }

    total+=input
}

alert(`Общая сумма чисел равна  ${total}`);