let userName = prompt('Enter your name');
let userSurname = prompt('Enter your surname');
let userEmail = prompt('Enter your email address');
let userAge = prompt('Enter your age');

console.log(`Hello I am ${userName} ${userSurname} I am ${userAge} year old, my email is ${userEmail}`);

document.getElementById('data').innerHTML = `Hello I am ${userName} ${userSurname} I am ${userAge} year old, my email is ${userEmail}`