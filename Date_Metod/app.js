//__ Date Function Kullanımı

let tarih = new Date()
console.log(tarih);

console.log(tarih.getDate());   //ayın kaçıncı günü olduğunu verir.
console.log(tarih.getDay());    //Haftanın kaçıncı günü olduğunu verir.
console.log(tarih.getFullYear());  //Yıl
console.log(tarih.getHours());     //Saat

//? Date Formatı Dönüşümü

let tarihFormatli = tarih.toLocaleDateString('tr-TR');
console.log(tarihFormatli);

let saatFormatli = tarih.toLocaleTimeString('tr-TR');
console.log(saatFormatli);

//? Tarih Farkı Hesaplama

let tarih1 = new Date("2022-01-01");
let tarih2 = new Date("2022-12-31");

let fark = Math.abs(tarih1.getTime() - tarih2.getTime());
let gunFarki = Math.ceil(fark / (1000 * 60 * 60 * 24));

console.log("Gün Farkı:", gunFarki);

//? Tarih Güncelleme

tarih.setDate(tarih.getDate() + 7); // Bir hafta 7 gün ilerletir
console.log(tarih.toLocaleDateString('tr-TR'));

tarih.setFullYear(tarih.getFullYear() + 1); // Bir yıl ilerletir
console.log(tarih.toLocaleDateString('tr-TR'));

tarih.setMonth(tarih.getMonth() + 1); // Bir ay ilerletir

console.log(tarih.toLocaleDateString('tr-TR'));

//? İki Tarih Arasında Geçen Günlerin Toplamı

let tarih3 = new Date("2022-01-01");
let tarih4 = new Date("2022-01-31");

let gunler = [];

while (tarih3 <= tarih4) {
    gunler.push(tarih3.toLocaleDateString('tr-TR'));
    tarih3.setDate(tarih3.getDate() + 1);
}

console.log("Geçen Günler:", gunler);

console.log("Toplam Gün Sayısı:", gunler.length);

//? İki Tarih Arasında Geçen Günlerin Toplamı (Yıllık Hesaplama)

let yillikGunler = [];

for (let i = 0; i <= 11; i++) {
    let yillikTarih1 = new Date(tarih3.getFullYear(), i, 1);
    let yillikTarih2 = new Date(tarih3.getFullYear(), i + 1, 0);

    let yillikFark = Math.abs(yillikTarih1.getTime() - yillikTarih2.getTime());
    let yillikGunFarki = Math.ceil(yillikFark / (1000 * 60 * 60 * 24));

    yillikGunler.push(yillikGunFarki);
}

console.log("Yıllık Geçen Günler:", yillikGunler);

console.log("Toplam Yıllık Gün Sayısı:", yillikGunler.reduce((a, b) => a + b, 0));

//? İki Tarih Arasında Geçen Günlerin Toplamı (Aylik Hesaplama)

let aylikGunler = [];

for (let i = 0; i <= 11; i++) {
    let aylikTarih1 = new Date(tarih3.getFullYear(), i, 1);
    let aylikTarih2 = new Date(tarih3.getFullYear(), i + 1, 0);

    let aylikFark = Math.abs(aylikTarih1.getTime() - aylikTarih2.getTime());
    let aylikGunFarki = Math.ceil(aylikFark / (1000 * 60 * 60 * 24));

    aylikGunler.push(aylikGunFarki);
}

console.log("Aylik Geçen Günler:", aylikGunler);


console.log("Toplam Aylik Gün Sayısı:", aylikGunler.reduce((a, b) => a + b, 0));