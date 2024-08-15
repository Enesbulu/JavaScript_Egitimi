class MigrosBase {

    indirimOranı = 20;

    constructor(isim, soyisim, kartVarMı, urunler) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.kartVarMı = kartVarMı;
        this.urunler = urunler;
    }

    hesapla() {
        let odenecekTutar = 0;

        if (this.urunleriKontrolEt(this.urunler)) {
            if (this.kartVarMı) {
                //Monet kartı vardır
                this.urunler.forEach(urun => {
                    odenecekTutar = (urun.fiyat * (100 - this.indirimOranı) / 100);
                });
            }
            else {

                this.urunler.forEach(urun => {
                    odenecekTutar += urun.fiyat;
                });
            }

        } else {
            alert("En az bir tane ürün satın almalısınız!");
        }
        return odenecekTutar;
    }

    urunleriKontrolEt(urunler) {
        if (urunler != null && urunler.length > 0) {
            return true;
        }
        return false;
    }
}
export {MigrosBase};