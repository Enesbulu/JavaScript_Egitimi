//Break - Continue

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Şart sağlandığında döngünün o adımını atlar sonraki döngü adımına atlar.
    }

    console.log(i);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 5) {
        break; // Koşul sağlandığında dögüyü tamamen kırar ve döngüden çıkıp sonraki satırdan devam eder.
    }
    console.log(numbers[i]);

}
// continue; // Bu satırı açarak, 5'in yazıldığı iterasyonu atlayarak devam edebilirsiniz
// break; // Bu satırı açarak, 5'in yazıldığı iterasyonu kaldırarak devam edebilirsiniz

