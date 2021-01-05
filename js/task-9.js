function getSubstring(string, length) {

  const substring = (string.slice(0,length)); // Дополни эту строку

  return substring;
}
getSubstring('Привет мир', 3) // 'При'.

 getSubstring('Привет мир', 6) // 'Привет'.

 getSubstring('Привет мир', 10) // 'Привет мир'.






function formatMessage(message, maxLength) {

  let result;

  if (message.length > maxLength) {
    

    result = message.slice(0, maxLength) + '...';
    
  } else {
    
  result = message;
}

  return result;
}



 formatMessage('Curabitur ligula sapien', 16) // 'Curabitur ligula...'.
 formatMessage('Curabitur ligula sapien', 23) // 'Curabitur ligula sapien'.
// Вызов функции formatMessage('Vestibulum facilisis purus nec', 20) возвращает 'Vestibulum facilisis...'.
// Вызов функции formatMessage('Vestibulum facilisis purus nec', 30) возвращает 'Vestibulum facilisis purus nec'.
formatMessage('Nunc sed turpis a felis in nunc fringilla', 15) // 'Nunc sed turpis...'.
// Вызов функции formatMessage('Nunc sed turpis a felis in nunc fringilla', 41) возвращает 'Nunc sed turpis a felis in nunc fringilla'.