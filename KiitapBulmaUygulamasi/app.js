//#region Kitap ve liste tanımlamaları
let kitap1 = { isim: "Her Şeyi Düşünme", Yazar: "Anne Bogel", Fiyati: 25, rafKodu: "1-1", };
let kitap2 = { isim: "Hiç Bir Karşılaşma Tesadüf Değildir", Yazar: "Hakan Mengüç", Fiyati: 28, rafKodu: "2-2", };
let kitap3 = { isim: "İnsan Neyle Yaşar", Yazar: "Tolstoy", Fiyati: 43 };
let kitap4 = { isim: "Şeker Portakalı", Yazar: "José Mauro de Vasconcelos", Fiyatı: 32, rafKodu: "4-2", };
let kitap5 = { isim: "Kardeşim Benim", Yazar: "José Mauro de Vasconcelos", Fiyatı: 35, rafKodu: "5-3", };

let kitaplar = [kitap1, kitap2, kitap3, kitap4, kitap5];

let raf11 = { kod: "1-1", goster: false };
let raf13 = { kod: "1-3", goster: false };
let raf12 = { kod: "1-2", goster: false };
let raf14 = { kod: "1-4", goster: false };
let raf15 = { kod: "1-5", goster: false };

let raf21 = { kod: "2-1", goster: false };
let raf22 = { kod: "2-2", goster: false };
let raf23 = { kod: "2-3", goster: false };
let raf24 = { kod: "2-4", goster: false };
let raf25 = { kod: "2-5", goster: false };

let raf31 = { kod: "3-1", goster: false };
let raf32 = { kod: "3-2", goster: false };
let raf33 = { kod: "3-3", goster: false };
let raf34 = { kod: "3-4", goster: false };
let raf35 = { kod: "3-5", goster: false };

let raf41 = { kod: "4-1", goster: false };
let raf42 = { kod: "4-2", goster: false };
let raf43 = { kod: "4-3", goster: false };
let raf44 = { kod: "4-4", goster: false };
let raf45 = { kod: "4-5", goster: false };

let raf51 = { kod: "5-1", goster: false };
let raf52 = { kod: "5-2", goster: false };
let raf53 = { kod: "5-3", goster: false };
let raf54 = { kod: "5-4", goster: false };
let raf55 = { kod: "5-5", goster: false };

//#endregion
let raflar = [
    [raf51, raf52, raf53, raf54, raf55],
    [raf41, raf42, raf43, raf44, raf45],
    [raf31, raf32, raf33, raf34, raf35],
    [raf21, raf22, raf23, raf24, raf25],
    [raf11, raf12, raf13, raf14, raf15],
];

function rafOlustur() {
    console.clear();
    let satir = "";

    for (let i = raflar.length - 1; i >= 0; i--) {
        for (let j = 0; j < raflar[i].length; j++) {
            satir += "|" + (raflar[i][j].goster ? raflar[i][j].kod : "---");
        }
        console.log(satir + "|");
        if (i != 0) {
            console.log("--------------------");
        }
        satir = "";
    }
}

function kodBul(kitapIsmi) {
    let rafKoddu = null;
    // debugger;
    kitaplar.forEach(function (kitap) {
        if (kitap.isim.toUpperCase().includes(kitapIsmi.toUpperCase(), 0)) { rafKoddu = kitap.rafKodu; }
    });
    return rafKoddu != null ? rafKoddu : null;
}

function raftaGoster(rafKodu) {
    for (let i = 0; i < raflar.length; i++) {
        for (let j = 0; j < raflar[i].length; j++) {
            if (raflar[i][j].kod == rafKodu) {
                raflar[i][j].goster = true;
                return;
            }
        }
    }
}


let kitapIsmi = prompt("Lütfen Kitap İsmini Giriniz: ");
console.log(kitapIsmi);
let rafKodu = kodBul(kitapIsmi);
console.log(rafKodu);
raftaGoster(rafKodu);

if (rafKodu === null) {
    alert("Aradığınız kitabın bulunamadı.");
} else {
    rafOlustur(rafKodu);
}


