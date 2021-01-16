function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {

  let message;

let totalPrice = orderedQuantity * pricePerDroid;
  
  if (totalPrice >= customerCredits) {
    
      console.log  ('Недостаточно средств на счету!')
      
  } else if (customerCredits = customerCredits - totalPrice) {
    

      console.log(`Вы купили ${orderedQuantity} дроидов, на счету осталось${customerCredits}  кредитов`)
  } else {

  massage ='Вы купили <число> дроидов, на счету осталось <число> кредитов'}

    return message;
    
} 
makeTransaction(2000, 8, 10000)

makeTransaction(3000, 5, 23000)


