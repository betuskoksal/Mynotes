//-Fonksiyonlar kendi scope alanlarını oluşturur.
var isim="Ahmet"; /* GLOBAL SCOPE */


// -Block(if, for vs.) içerisinde yeni bir scope oluşmaz(let,const)

var isim="Ahmet";
function yazdir() {
    var isim="Ayşe";
    var yas=20;
    console.log("fuction scope:", isim, yas);
}

if(true){
    let cinsiyet="Kadın";
    let isim="Zeynep";
    console.log(isim,cinsiyet);
}

console.log(isim);
yazdir();
/* Zeynep Kadın
Ahmet
fuction scope: Ayşe 20 */ 



//-Uygulama boyunca değiştirilmemesini garanti altına almak istediğimiz değerleri Const olarak tanımlıyoruz.  

var isim="Ahmet";
const adres= "İstanbul";
adres= "Kocaeli"; /* Bu satırda hata verir çünkü istanbul olarak adres değişkenini tanımladınız
uygulama boyunca değiştiremezsiniz hatası verir. */
