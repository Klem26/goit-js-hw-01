function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;

  let totalPrice = pricePerDroid * orderedQuantity 
  
  
  
  if (customerCredits >= totalPrice){
    
  message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits - totalPrice} кредитов`;
    
  } else {
    
 message = 'Недостаточно средств на счету!'
  }

 
  return message;
}
console.log(makeTransaction(1000, 3, 15000))
console.log(makeTransaction(2000, 8, 10000))