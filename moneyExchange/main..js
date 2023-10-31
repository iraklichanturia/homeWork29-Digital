/**17. წარმოიდგინეთ რომ მუშაობთ ბანკში, თქვენ ამოცანას წარმოადგენს
რომ მომხმარებელს დაეხმაროთ ფულის კონვერტაციაში, მაგალითად
თუ მომხმარებელმა შემოიტანა თანხა 100₾ და შემდგომ მან აიღცია
ვალუტის ტიპი დოლარშ , თქვენ ამოცანას წარმოადგენს რომ

გადააკონვერტიროთ 100₾ დოლარებში და დაუბეჭდოთ მიღებული
თანხა კონშოლში, ვალუტად აიღეთ დოლარი, რუბლი, ფუნტი.**/

// // Define exchange rates for different currencies in the same order as the currencies array
// const exchangeRates = [0.27, 20.67, 0.21]; // USD, RUB, GBP

// // Define currency labels
// const currencies = ["USD", "RUB", "GBP"];

// // Get the amount in GEL from the user
// const amountInGEL = parseFloat(prompt("Enter the amount in GEL"));
// let choice = prompt("Enter the currency USD, RUB, GBP");

// while (!currencies.includes(choice)) {
//     choice = prompt("Enter the currency USD, RUB, GBP");
// }

// if (choice == currencies[0]) {
//   console.log((exchangeRates[0] * amountInGEL).toFixed(2));
// } else if (choice == currencies[1]) {
//   console.log((exchangeRates[1] * amountInGEL).toFixed(2));
// } else if (choice == currencies[2]) {
//   console.log((exchangeRates[2] * amountInGEL).toFixed(2));
// };

// Define exchange rates for different currencies in the same order as the currencies array
const exchangeRates = [0.27, 20.67, 0.21]; // USD, RUB, GBP

// Define currency labels
const currencies = ["USD", "RUB", "GBP"];

// Get the amount in GEL from the user
const amountInGEL = parseFloat(prompt("Enter the amount in GEL"));
let choice = prompt("Enter the currency USD, RUB, GBP").toUpperCase(); 

while (!currencies.includes(choice)) {
    choice = prompt("Enter the currency USD, RUB, GBP").toUpperCase();
}

if (choice === currencies[0].toUpperCase()) {
    console.log((exchangeRates[0] * amountInGEL).toFixed(2));
} else if (choice === currencies[1].toUpperCase()) {
    console.log((exchangeRates[1] * amountInGEL).toFixed(2));
} else if (choice === currencies[2].toUpperCase()) {
    console.log((exchangeRates[2] * amountInGEL).toFixed(2));
}

