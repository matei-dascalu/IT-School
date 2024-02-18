// scrie o secventa de cod care face suma cifrelor unui numar;
let number = 36298;
let sum = 0;

let iteration = 1;
while (number !== 0) {
    console.log("Iteratia: ", iteration);
    console.log("numarul este: ", number);
    console.log("Suma este: ", sum);

    sum = sum + (number % 10);
    number = Math.floor(number / 10);

    iteration++;
}

console.log("Suma finala este: ", sum);

// Scrie o secventa care numara cate cifre contine un numar
let x = 123456;
let count = 0;

while (x !== 0) {
    count++;
    x = Math.floor(x / 10);
}

console.log(count);







