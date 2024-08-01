//__  Öath Sınıfı Metodları
/**
 * 1-Floor
 * 2-Ceil
 * 3-Round
 * 4-Max
 * 5-Min
 * 6-Random
 * 7-Abs
 * 8-Sqrt
 * 9-Pow
 * -->PI Sayısı
 */

let a = 10.7;

//Floor =>Bu işlem, bir sayının tam bölümünü alır ve kalanını verir. Örnek: 10.7'nin tam bölümü 10 olur.
console.log(Math.floor(a)); // 10

//Ceil =>Bu işlemin tersi, yani yuvarlama işlemi, sayının tam sayı olup olmadığını kontrol eder. Örnek: 10.7'nin yuvarlanmış hali 11 olur
console.log(Math.ceil(a)); // 11

//Round => Bu işlemin, bir sayının yuvarlanmış hali olup olmadığını kontrol eder ve yuvarlar. Yani, sayı çift sayıysa ondalık kısmı siler ve yuvarlar. Yani, sayı tek sayıysa ondalık kısmı kaldırır ve yuvarlar. Örnek: 10.7'nin yuvarlanmış hali 11 olur. Bu işlemi kullanarak, sayının yuvarlanmış hali olup olmadığını kontrol edip yuvarlamak için kullanabilirsiniz.
console.log(Math.round(a)); // 1184

//Max => Bu işlemin, dizideki elemanların en büyüğünü döndürür. Örnek: 5, 10, 15, 20, 25'in en büyüğü 25 olur.
console.log(Math.max(5, 10, 15, 20, 25)); // 25

//Min => Bu işlemin, dizideki elemanların en küçüğünü döndürür. Örnek: 5, 10, 15, 20, 25'in en küçüğü 5 olur.
console.log(Math.min(5, 10, 15, 20, 25)); // 5

//Random => Bu işlemin, 0 ile 1 arasında rastgele bir sayı üretir. Örnek: 0.7653589793103446 olur.
console.log(Math.random() * 10); // 0 ile 10 arasında rastgele bir sayı üretir

//Abs => Bu işlemin, sayının mutlak değerini döndürür. Örnek: -5'nin mutlak değerini 5 olur.
console.log(Math.abs(-5)); // 5

//Sqrt => Bu işlemin, sayının karekökünü döndürür. Örnek: 25'nin karekökü 5 olur.
console.log(Math.sqrt(25)); // 5

//Pow => Bu işlemin, bir sayının üstününü alarak yeni bir sayı elde eder. Örnek: 2 üzeri 3'nin 8 olur.  // Math.pow(base, exponent)
console.log(Math.pow(2, 3)); // 8

//PI => Bu işlemin, pi sayısını döndürür. Örnek: 3.141592653589793 olur.  // Math.PI
console.log(Math.PI); // 3.141592653589793

