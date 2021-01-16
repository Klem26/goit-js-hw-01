function checkStorage(available, ordered) {
  let message;

if(ordered === 0){
message = 'В заказе еще нет товаров'
  
}else if(ordered > available ){
message = 'Слишком большой заказ, на складе недостаточно товаров!'
} else {
  message= 'Заказ оформлен, с вами свяжется менеджер'}
 
  return message;
}
console.log( checkStorage(70, 0))
console.log(checkStorage(200, 20))
console.log(checkStorage(200, 250))