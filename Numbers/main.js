let number = Number(prompt("enter number from 0 to 200"));

let divisorsOfNumber = [];

for (let i = 0; i <= number; i++) {
  while (number % i == 0) {
    divisorsOfNumber.push(i);
    break;
  }
}
if (divisorsOfNumber.length > 2) {
      console.log(`${number} is composite`);
    } else if (divisorsOfNumber.length == 2) {
      console.log(`${number} is prime number`);
    } else {
      console.log(`${number} is not prime and composite`);
    }
console.log(divisorsOfNumber);
document.getElementById('content').innerHTML = divisorsOfNumber