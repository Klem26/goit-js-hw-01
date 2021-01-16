function formatMessage(message, maxLength) {
  let result;

  result = message.length > maxLength ?message.slice(0, maxLength) + '...'
  :message
    
  return result;
}


// function formatMessage(message, maxLength) {

//   let result;

//   if (message.length > maxLength) {
    

//     result = message.slice(0, maxLength) + '...';
    
//   } else {
    
//   result = message;
// }

//   return result;
// }
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15))
console.log( formatMessage('Curabitur ligula sapien', 23))