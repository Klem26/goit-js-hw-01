function getSubstring(string, length) {

  const substring = (string.slice(0,length)); // Дополни эту строку

  return substring;
}
console.log(getSubstring('Привет мир', 3)) // 'При'.

 console.log(getSubstring('Привет мир', 6)) // 'Привет'.

 console.log(getSubstring('Привет мир', 10)) // 'Привет мир'.