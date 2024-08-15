//Müşteri Classı

import {MigrosBase} from './MigrosBase.js';

class Musteri extends MigrosBase {
    constructor(isim, soyisim, kartVarMi, urunler) {
        super(isim, soyisim, kartVarMi, urunler)
    }

    hesapla() {
        return super.hesapla();
    }
}

export {Musteri};