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



function checkIfCanAccessContent(subType) {
  const canAccessContent = (subType==='pro')||(subType ==='vip'); // дополни эту строку

    return canAccessContent;
    // console.log(canAccessContent)
}

checkIfCanAccessContent('pro')
checkIfCanAccessContent('vip')
checkIfCanAccessContent('free')


function getShippingCost(country) {
  let message;
  
  
  switch (country) {
  case  'Китай':
  price = '100';
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;

  case 'Чили':
    price = '250';
    message = `Доставка в ${country} будет стоить ${price} кредитов`;

    break;
        case 'Австралия':
        price = '170';
    message = `Доставка в ${country} будет стоить ${price} кредитов`;

    break;
        case 'Ямайка':
        price = '120';
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
  
    break;

  default:
    message= 'Извините, в вашу страну доставки нет';
}
  
 
  return message;
}

getShippingCost('Австралия');
getShippingCost('Германия');
getShippingCost('Китай');
getShippingCost('Ямайка');
getShippingCost('Чили');