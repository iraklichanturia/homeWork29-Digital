    let amount = parseInt(prompt('enter amount'));
    const bill = [200, 100, 50, 20, 10, 5];
    const result = [];
    for (let i = 0; i < bill.length; i++) {
        while (amount >= bill[i]) {
            result.push(bill[i]);
            amount -= bill[i];
        }
    };

    console.log(result);

//     var userInput = prompt("insert money")
// const array = [200,100,50,20,10,5]
// for(let i=0; i< array.length; i++){
//     if(userInput >= array[i]){
//         if(userInput/array[i] >= 1){
//             userInput-=array[i]
//             console.log(array[i])
//         }
//     }
// }





