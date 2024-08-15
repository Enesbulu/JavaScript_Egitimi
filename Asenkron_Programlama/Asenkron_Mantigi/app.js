/** 
 *  1- Javascript senkron çalışan bir programlama dilidir.
 *  2- Asenkron olarak çalıştığı zamanlar;
 *      -Timing
 *      -Event(Olaylar)
 *      -Http İstekleri
 * ------Callback -- Promise -- Async & Await -------->>> Asenkron yapıları senkrona çevirip yönetebiliyoruz.
 * 
 */

console.log("Enes");
setTimeout(() => {
   console.log("Süresi doldu ve çalıştı"); 
}, 2500);
console.log("Bulut")