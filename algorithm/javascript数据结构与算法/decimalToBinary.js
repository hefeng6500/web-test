const Stack = require('./Stack')

/**
 * @param {Number} decNumber 10 进制数
 * 10 进制数转化为 2 进制数
 */

function decimalToBinary(decNumber) {
  const remStack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = '';
  while (number > 0) { // {1}
    rem = Math.floor(number % 2); // {2}
    remStack.push(rem); // {3}
    number = Math.floor(number / 2); // {4}
  }
  while (!remStack.isEmpty()) { // {5}
    binaryString += remStack.pop().toString();
  }
  return binaryString;
}

console.log(decimalToBinary(233)); // 11101001
console.log(decimalToBinary(10)); // 1010
console.log(decimalToBinary(1000)); // 1111101000