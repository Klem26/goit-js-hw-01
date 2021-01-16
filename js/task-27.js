 function getSubscriptionPrice(type) {
  let price;
  // Пиши код ниже этой строки

 switch (type) { // Дополни эту строку
    case 'starter': // Дополни эту строку
      price =  0  ; // Дополни эту строку
      break;

    case 'professional': // Дополни эту строку
      price =  20  ; // Дополни эту строку
      break;

    case 'organization'  : // Дополни эту строку
      price = 50 ; // Дополни эту строку
      break;
  }

 
  return price;
 }
console.log(getSubscriptionPrice('organization'))
console.log( getSubscriptionPrice('starter'))