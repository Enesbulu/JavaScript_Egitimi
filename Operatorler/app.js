//? ARİTMATİK OPERATÖRLER

/*
= -> Atama operatörü
+ -> Toplama öğeratörü 
- -> Çıkarma operatörü
* -> Çarpma operatörü
/ -> Bölme operatörü
% -> Mod alma operatörü
++ -> Önce değerin artırılması ve sonra değerin gösterilmesi
-- -> Önce değerin azaltılması ve sonra değerin gösterilmesi
+= -> Önce değerin artırılması ve sonra değerin eşitlenmesi
-= -> Önce değerin azaltılması ve sonra değerin eşitlenmesi
*= -> Önce değerin artırılması ve sonra değerin çarpılması
/= -> Önce değerin azaltılması ve sonra değerin bölümü alınması
%= -> Önce değerin azaltılması ve sonra değerin mod alınması
*/

let x = 5;
x += 3; // x = x + 3
console.log("x += 3 ->  " + x); // 8

x -= 2; // x = x - 2
console.log("x -= 2 -> " + x); // 6

x *= 3; // x = x * 3
console.log("x *= 3 -> " + x); // 18

x /= 2; // x = x / 2
console.log("x /= 2 -> " + x); // 9

x %= 3; // x = x % 3
console.log("x %= 3 -> " + x); // 0

let y = 5;
let z = ++y; // y = y + 1, z = y
console.log("z = ++y -> " + y, z); // 6, 6

let w = --y; // y = y - 1, w = y
console.log("w = --y -> " + y, w); // 5, 5

let v = y + 5; // y = y + 5
console.log("v = y + 5 -> " + v); // 10

let u = y - 5; // y = y - 5

console.log("u = y - 5 -> " + u); // 0

let t = y * 5; // y = y * 5
console.log("t = y * 5 -> " + t); // 25

let s = y / 5; // y = y / 5

console.log("s = y / 5 -> " + s); // 1

let r = y % 5; // y = y % 5

console.log("r = y % 5 ->" + r); // 0

