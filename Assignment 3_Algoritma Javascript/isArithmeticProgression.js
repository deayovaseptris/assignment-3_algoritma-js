// Nama: Dea Yova Septri Saragih

function isArithmeticProgression(numbers) {
  if (numbers.length < 2) {
    return true;
  }

  const diff = numbers[1] - numbers[0];

  for (let i = 2; i < numbers.length; i++) {
    if (numbers[i] - numbers[i - 1] !== diff) {
      return false;
    }
  }

  return true;
}

// Test Cases
console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); //true
console.log(isArithmeticProgression([2, 4, 6, 12, 24])); //false
console.log(isArithmeticProgression([2, 4, 6, 8])); //true
console.log(isArithmeticProgression([2, 6, 18, 54])); //false
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); //false
