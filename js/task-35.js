function checkForName(fullName, name) {
 const result = fullName.includes(name); 
  return result;
}
console.log(checkForName('Егор Колбасов', 'Егор'))
 console.log(checkForName('Егор Колбасов', 'егор'));

 