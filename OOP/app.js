//_ OOP /Nesneye YÖnelik Programlama

class Insan {
    constructor(isim, soyisim, yas, maas) {  //*yapıcı metod
        this.isim = isim;
        this.soyisim = soyisim;
        this.yas = yas;
        this.maas = maas;
    }

    bilgileriGoster() {     //*class içerisinde metod yazımı
        console.log(`Adı: ${this.isim}, 
Soyadı: ${this.soyisim}, 
Yaş: ${this.yas}, 
Maaş: ${this.maas}
`);
    }

}

//*Nesne oluşturmak
const insan1 = new Insan();
const insan2 = new Insan("Enes", "Bulut", 24, 30000);
insan2.bilgileriGoster();   //*metodun çağırılması.