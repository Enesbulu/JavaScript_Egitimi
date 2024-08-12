//_  For in -- For of Döngüleri


//* Foreach
let names = ["Enes","Ali","Veli","Ceylan","Betül"];
names.forEach(function(name) {
         console.log(name);
});

//*foreach --arrow func
names.forEach(name=> console.log(name));

//* For in  -- elemanların index numarasını döner

for(let i in names) {
    console.log(names[i]);
}

for (const name in names) {
    console.log(name+" : "+names[name]);     //dizi elamının indexi ve değerini verir.
 }

//* For of  -- dizi içerisindeki elemanların değerlerini döner

for(let name of names) {
    console.log(name);
}


for(let name of names) {
    console.log(names.indexOf(name) +" : "+name);   //dizi elamının indexi ve değerini verir.
}



