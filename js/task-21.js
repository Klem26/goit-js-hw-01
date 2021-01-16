function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end; // дополни эту строку

  return isInRange;
}
console.log(isNumberInRange(20, 50, 24) )