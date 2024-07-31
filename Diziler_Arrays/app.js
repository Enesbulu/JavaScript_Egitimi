//__  ----------   DİZİLER-ARRAYS   ---------

let arr = [1, 2, 3, 4, 5];
console.log(arr); // Diziyi yazdırır

arr[0] = 10;
console.log(arr); // Dizinin ilk elemanını değiştirir ve diziyi yazdırır

arr.push(6);
console.log(arr); // Dizinin sonuna yeni bir eleman ekler ve diziyi yazdırır

arr.pop();
console.log(arr); // Dizinin son elemanını çıkarır ve diziyi yazdırır

console.log(arr.length); // Dizinin uzunluğunu yazdırır

console.log(arr.includes(3)); // Dizinin belirli bir elemanı içerip içermediğini kontrol eder

let newArr = arr.slice(1, 3);
console.log(newArr); // Dizinin belirli bir kısmını alır ve yeni bir dizi olarak döndürür

let joinedArr = arr.join("-");
console.log(joinedArr); // Dizi elemanlarını belirtilen bir ayırıcı ile birleştirir

//__  ----------   MULTIDIMENSIONAL DİZİLER   ---------

let multiArr = [[1, 2], [3, 4], [5, 6]];
console.log(multiArr[1][1]); // Çok boyutlu diziden belirli bir elemanı alır

multiArr[1].push(7);
console.log(multiArr); // İç içe dizilere eleman ekler

//__  ----------   DİZİLER-ARRAYS İLE İŞLEMLER   ---------

let arr2 = [1, 2, 3, 4, 5];
let arr3 = [6, 7, 8, 9, 10];
let combinedArr = arr2.concat(arr3);
console.log(combinedArr); // İki diziyi birleştirir

let filteredArr = arr2.filter((num) => num % 2 === 0);
console.log(filteredArr); // Belirli bir koşula uyan elemanları içeren yeni bir dizi oluşturur

let sortedArr = arr2.sort((a, b) => b - a);
console.log(sortedArr); // Diziyi sıralar

let reducedArr = arr2.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(reducedArr); // Diziyi tek bir değere indirger

//__  ----------   DİZİLER-ARRAYS İLE İŞLEMLER-2   ---------

let arr4 = [1, 2, 3, 4, 5];
let arr5 = [6, 7, 8, 9, 10];
let mergedArr2 = [...arr4, ...arr5];
console.log(mergedArr2); // Spread operatörü kullanarak dizileri birleştirir

let filteredArr2 = arr4.filter((num) => num % 2 === 0);
console.log(filteredArr2); // Belirli bir koşula uyan elemanları içeren yeni bir dizi oluşturur

let sortedArr2 = arr4.sort((a, b) => b - a);
console.log(sortedArr2); // Diziyi sıralar

let reducedArr2 = arr4.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(reducedArr2); // Diziyi tek bir değere indirger

//__  ----------   DİZİLER-ARRAYS İLE İÇ İÇE DİZİLER   ---------

let arr6 = [[1, 2], [3, [4, 5]], [6, 7]];
let flattenedArr = arr6.flat();
console.log(flattenedArr); // İç içe dizileri tek bir düz diziye indirger

//__  ----------   DİZİLER-ARRAYS İLE İÇ İÇE DİZİLER-2   ---------

let arr7 = [[1, 2], [3, [4, 5]], [6, 7]];
let flattenedArr2 = arr7.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flattenedArr2); // İç içe dizileri concat ve reduce kullanarak düzleştirir

//__  ----------   DİZİLER-ARRAYS İLE İÇ İÇE DİZİLER-3   ---------

let arr8 = [[1, 2], [3, [4, 5]], [6, 7]];
let flattenedArr3 = arr8.flatMap((value) => value);
console.log(flattenedArr3); // flatMap kullanarak diziyi düzleştirir

//__  ----------   DİZİLER-ARRAYS İLE İÇ İÇE DİZİLER-4   ---------

let arr9 = [[1, 2], [3, [4, 5]], [6, 7]];
let flattenedArr4 = arr9.reduce((accumulator, currentValue) => accumulator.concat(...currentValue), []);
console.log(flattenedArr4); // İç içe dizileri concat ve reduce kullanarak düzleştirir

//__  ----------   DİZİLER-ARRAYS İLE İÇ İÇE DİZİLER-5   ---------

let arr10 = [[1, 2], [3, [4, 5]], [6, 7]];
let flattenedArr5 = arr10.reduce((accumulator, currentValue) => accumulator.concat(...currentValue), []).flat();
console.log(flattenedArr5); // İç içe dizileri düzleştirir ve flat kullanarak son işlemi yapar

//__  ----------   DİZİLER-ARRAYS İLE İÇ İÇE DİZİLER-6   ---------

let arr11 = [[1, 2], [3, [4, 5]], [6, 7]];
let flattenedArr6 = arr11.flatMap((value) => value.flatMap((subValue) => subValue));
console.log(flattenedArr6); // flatMap kullanarak diziyi daha derin düzeyde düzleştirir

//__  ----------   DİZİLER-ARRAYS İLE İÇ İÇE DİZİLER-7   ---------

let arr12 = [[1, 2], [3, [4, 5]], [6, 7]];
let flattenedArr7 = arr12.flatMap((value) => value.flatMap((subValue) => subValue)).flat();
console.log(flattenedArr7); // flatMap ve flat kullanarak diziyi tamamen düzleştirir
