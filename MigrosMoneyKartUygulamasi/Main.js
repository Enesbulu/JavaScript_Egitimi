import {Musteri} from './Musteri.js';


let mesaj = `
Migros'a Hoşgeldiniz.
Money Kartınız var mı?
1-Evet
2- Hayır
`;

const urunler = [
    {
        urunIsmi: "Süt",
        fiyat: 15
    },
    {
        urunIsmi: "Tavuk Kanat",
        fiyat: 75
    },
    {
        urunIsmi: "Çay",
        fiyat: 95
    }
];

let sonuc = confirm(mesaj);
let odenecekTutar;
if (sonuc) {
    // TODo : Money kartı vardır.
    let isim = prompt("Adınızı Giriniz");
    let soyisim = prompt("Soy isminizi giriniz.");

    const musteri = new Musteri(isim, soyisim, sonuc, urunler);
    odenecekTutar = musteri.hesapla();
    alert(`
        Müşteri Bilgileri: ${isim} ${soyisim}
        Ödenecek Tutar: ${odenecekTutar}
        `);


} else {
    // TODo : Money kartı yok.
    const musteri = new Musteri(null, null, sonuc, urunler);
    odenecekTutar = musteri.hesapla();
    alert(`Ödenecek Tutar: ${odenecekTutar}`);
}




