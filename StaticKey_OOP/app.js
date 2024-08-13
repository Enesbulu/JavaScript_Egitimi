//_ Static Nedir?
//? Bir function veya özellik static ise CLASS'a özgüdür, değilse NESNE'ye özgüdür.


class Matematik{
    topla(a,b){
        return a + b;
    }
    static cikar(a,b){
        return a - b;
    }
    carp(a,b){
        return a * b;
    }
    bol(a,b){
        return a / b;
    }
}


const matematik = new Matematik();

//! Static olarak tanımlanmamışsa NESNE üzerinden erişilir.
//! Static olarak tanımlanmışsa CLASS İSMİ üzerinden erişilir.
console.log(matematik.topla(5, 8)); // 13

console.log(Matematik.cikar(10,7));


