
let credits = 23580;
const pricePerDroid = 3000;



let userInput = prompt('Какое количество дроидов хотите купить?')

userInput = Number(userInput);

let totalPrice = userInput * pricePerDroid;
 
console.log(totalPrice);

if (userInput === null) {

    console.log('Отменено пользователем!');

} else if (credits >= totalPrice) {

    credits = credits - totalPrice; 
    
    console.log(`Вы купили ${userInput} дроидов, на счету осталось ${credits} кредитов.`);
    
} else if (credits < totalPrice) {

    console.log('Недостаточно средств на счету!');
    
} 


    


   

