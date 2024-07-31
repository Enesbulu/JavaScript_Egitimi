//?   Breakpoint ve Tooltip 
//?   Tooltip  => Bir metodun  ne yaptığı hakkında bilgi verir. 
//?   Breakpoint => Kodun çalıştığı yerin ne olduğu hakkında bilgi verir.
//?   Debugging => Kodun çalıştığı yerin ne olduğu hakkında bilgi verir.

let a = 10;
let b = 20;
debugger;   // Burada debugger komutu ile bir breakpoint koyuldu.
let c = a + b;
let d = a + b + c;
debugger;
let e = a + b + c + d;
let f = b + c + e;
console.log(f);

