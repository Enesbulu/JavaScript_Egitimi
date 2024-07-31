//__ Binary Sayıyı Decimal Sayıya Çevirme

let binary = "000001111222";//!15 çıktısını verir 0 ve 1 harici karakteri dikkate almaz!
function convertBinsryToDecimal(binary) {
    let toplam = 0;
    let ust = 0;
    for (let i = binary.length - 1; i >= 0; i--) {
        if (Number(binary.charAt(i)) == 0 || Number(binary.charAt(i)) == 1) {
            if (Number(binary.charAt(i)) != 0) {
                toplam += Number(binary.charAt(i)) * Math.pow(2, ust);
            }
            ust++;
        }
    }
    console.log(toplam);
}

convertBinsryToDecimal(binary);