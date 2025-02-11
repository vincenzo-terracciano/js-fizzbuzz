/* FizzBuzz exercise 
    - creare un ciclo FOR che permetta di stampare i numeri da 1 a 100;
    - creare un IF che come condizione abbia di stampare la stringa "FizzBuzz" per i multipli di 3 AND per i multipli di 5;
    - creare un IF che per i multipli di 3 stampi la stringa "Fizz";
    - creare un IF che per i multipli di 5 stampi la stringa "Buzz";
    - altrimenti stampa il resto dei numeri;
*/

for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    } 
    else {
        console.log(i);
    }
}