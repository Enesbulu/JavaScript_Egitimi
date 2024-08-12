//_ Maps  ---> key(anahtar) : value (değer)

const map1 = new Map();

//* SET ---> key(anahtar) : value (değer) olarak değer ekleme işlemi
// map1.set(1,"Enes");
// map1.set(2,true);
// map1.set([1,2,3],{firstname:"Enes",lastname:"Bulut"});
// map1.set(true,"5");

map1.set(34,"İstanbul");
map1.set(35, "İzmir");
map1.set(32,"Isparta");
map1.set(6,"Ankara");

//* GET ---> key'e göre değer alma işlemi
console.log(map1.get(6));
console.log(map1.get(34));
const donenDeger = map1.get(35);    //aslında get bir return işlemi yapar ve değişkene atanabilir.
console.log(donenDeger);

//* SIZE ---> Map'in boyutunu döner;

console.log(map1.size);

//* DELETE ---> key'e göre değer silme işlemi

let value= map1.delete(34);    //bool değer döner
console.log(value);

//* HAS ---> Keye göre değerin sahipliğini sorgular
console.log(map1.has(34));  
value = map1.has(35);
console.log(value);


//* For Of map üzerinde dönebiliriz

for(let [key,value] of map1){   //Destructing işlemi ile key ve value yu her birini ayrı olarak alır.
    console.log(key,value);
}

const keys = Array.from(map1.keys());   //key'leri döner
console.log(keys);
keys.forEach((key)=>console.log(key));

for(let key of map1.keys()) {
    console.log(key);
}


for(let value of map1.values()) {    //value'leri döner   
    console.log(value);
}


//Map' den array'e çevirme
const array = Array.from(map1);
console.log(array);
array.forEach(arr=> console.log(arr));


//* Array'i map'e çevirme
const map2 = new Map(array);
console.log(map2);
console.log(map2);



// map1.set([1,2,3],{firstname:"Enes",lastname:"Bulut"});   //böyle bir tanımlama yapılırsa değere ulaşılamaz. çünkü key değeri referans tiplidir ve buna doğrudan ulaşılamaz.
let myKey = [1,2,3];    //doğru yöntem bu şekilde, olması gerekir.
map1.set(myKey,{firstname:"Enes",lastname:"Bulut"});
console.log(map1.get(myKey));



//* Map'in boş olup olmadığını kontrol eder





