function normalizeInput(input) {

  const normalizedInput = input.toLowerCase(); 

  return normalizedInput;
}


 normalizeInput('Привет мир') 
 normalizeInput('Это НЕ СпаМ') // 'это не спам'.
normalizeInput('Большие СКИДКИ')// 'большие скидки'.



function checkForName(fullName, name) {

  const result = fullName.includes(name); 
  
  return result;
}


checkForName('Егор Колбасов', 'Егор') //возвращает true.
 checkForName('Егор Колбасов', 'егор') //возвращает false.



function checkForSpam(message) {

  let result;
	
  message = message.toLowerCase();
  
 result = message.includes('spam') || message.includes('sale');
  
  
  return result;
}


checkForSpam('Latest technology news') // false.
checkForSpam('JavaScript weekly newsletter')// false.
 checkForSpam('Get best sale offers now!')// true.
