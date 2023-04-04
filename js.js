let greeting=prompt("Lütfen Adınızı Giriniz:")
let myname= document.querySelector("#myname")
myname.innerHTML =  `${myname.innerHTML} <small>${greeting}</small>`


var aSaat = document.getElementById("saat"); //aSaat adında bir değişken tanımladık.
function format(saatcek) {
var bSaat = saatcek.toString();
if (bSaat.length == 1) {
return "0" + bSaat;
} else {
return bSaat;
}
}
function saatGuncelleme() { //Burada bilgisayarımızdan saati çekiyoruz.
var tarih = new Date();
var saat = tarih.getHours(); //Burada saati çekiyoruz.
var dakika = tarih.getMinutes(); //Burada dakikayı çekiyoruz.
var saniye = tarih.getSeconds(); //Burada saniyeyi çekiyoruz.
var ay =tarih.getMonth();
var gün =tarih.getDay();
var yıl= tarih.getFullYear();

aSaat.textContent = format(saat) + ":" + format(dakika) + ":" + format(saniye) + "      " + format(gün) + ":" + format(ay) + ":" + format(yıl); //Burada ekranımıza çıktımızı veriyoruz.
}
setInterval(saatGuncelleme, 1000);

