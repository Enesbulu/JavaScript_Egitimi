//__ String Sınıfının Metodları
let kurs = "Modern Web Geliştirme Kursu";

//CharAt() => indexdeki karakteri döndürür.
console.log(kurs.charAt(0)); // M

// concat() => string metnin sonuna verilen string ekler ve döner. Stringleri birleştirir.
console.log(kurs.concat(" ile İlgili")); // Modern Web Geliştirme Kursu ile İlgili

// indexof() => verilen karakterin karşılaşılan ilk indexini döner
console.log(kurs.indexOf("e")); // 3

// lastIndexOf() =>verilen karakterin karşılaşılan son indexini döner
console.log(kurs.lastIndexOf("e")); // 20

// ToUpperCase() => Bütün karakterleri büyük harf olan kopyasını döner.
console.log(kurs.toUpperCase()); // MODERN WEB GELİŞTİRME KURSU İLE İLGILI

// ToLowerCase() => Bütün karakterleri küçük harf olan kopyasını döner.
console.log(kurs.toLowerCase()); // modern web geliştirme kursu ile ilgili

// Trim()   => Metnin başındaki ve sonundaki boşlukları siler.
console.log("   Modern Web Geliştirme Kursu ile İlgili   ".trim()); // "Modern Web Geliştirme Kursu ile İlgili"

// Slice()  =>verilen başlangıç ve bitiş indexlerinin arasındaki karakterleri bütün olarak döner.ilk index dahil son index hariç.
console.log(kurs.slice(0, 10)); // Modern Web
console.log(kurs.slice(10)); // Geliştirme Kursu ile İlgili

// Substring()  => ilk index-dahil- ile son index--hariç arasında bölümü döner. 
console.log(kurs.substring(0, 10)); // Modern Web
console.log(kurs.substring(10)); // Geliştirme Kursu ile İlgili

// Replace()    => seçilen kelime/karakter ile verilen kelime/karakter değişimi yapar.
console.log(kurs.replace("Modern", "Futur")); // Futur Web Geliştirme Kursu ile İlgili

// Split()  =>  Verilen belli bir karaktere göre metni parçalar ve dizi olarak döner.
console.log(kurs.split(" ")); // [ 'Modern', 'Web', 'Geliştirme', 'Kursu', 'ile', 'İlgili' ]

//valueOf() =>
console.log(kurs.valueOf()); // Modern Web Geliştirme Kursu ile İlgili

// StartsWith() => Verilen değer ile başlıyor mu kontrolünü yapar ve bool değer döner.
console.log(kurs.startsWith("Modern")); // true

// EndsWith()   => Verilen değer ile bitiyor mu kontrolünü yapar ve bool değer döner.
console.log(kurs.endsWith("Kursu ile İlgili")); // true

// Template Literals
let ad = "Enes";
let soyad = "Büyük";
console.log(`Merhaba, ben ${ad} ${soyad} adlı insan.`); // Merhaba, ben Enes Büyük adlı insan.

// Includes()
console.log(kurs.includes("Geliştirme")); // true

// Repeat()
console.log(kurs.repeat(3)); // Modern Web Geliştirme Kursu ile İlgili Modern Web Geliştirme Kursu ile İlgili Modern Web Geliştirme Kursu ile İlgili

// String Metodlarının Örnekleri
let metin = "   Ben bir metin yazdım   ";
console.log(metin.trim()); // Ben bir metin yazdım
let metin2 = "Ben bir metin yazdım";
console.log(metin2.replace("metin", "düzen")); // Ben bir düzen yazdım


