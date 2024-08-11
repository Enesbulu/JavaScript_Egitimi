//_ Dectructing Kullanımı

let langs = ["C#", "JavaScript", "C++", "Python"];
let lang1, lang2, lang3, lang4;

// lang1=langs[0];
// lang2=langs[1];
// lang3=langs[2];
// lang4=langs[3];

[lang1, lang2, lang3, lang4] = langs;  //Sıralı olarak dizi içerisinde verilen değişkenlere array içerisindeki indis değerlerine atar.

console.log(lang1, lang2, lang3, lang4);


const hesapla = (a, b) => {
    const toplam = a + b;
    const cikar = a + b;
    const carp = a * b;
    const bol = a / b;
    const dizi = [toplam, bol, cikar, carp]
    return dizi;

}

let [a, b, c, d] = hesapla(10, 2);

console.log(a, b, c, d); // 12, 0.5, 8, 20


const person = {
    firstName: "Enes",
    lastName: "Bulut",
    age: 30,
    city: "Istanbul"
}



// isim = person.firstName;
// soyIsım = person.lastName; 
// yas = person.age;
// sehir = person.sehir;


let { firstName: isim, lastName: soyad, age: yas, city: sehir } = person;
// console.log(firstName, lastName, age, city)
console.log(isim, soyad, yas, sehir)


