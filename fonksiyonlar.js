/* FONKSİYONLAR 
-Belli bir amaç için tekrar tekrar yapacak olduğumuz işlemleri bir fonksiyona yaptırabilyoruz.
-Fonksiyon tanımladıktan sonra çalıştımak için çağırmamız gerekir.
-Fonksiyonu birden fazla kez çağırabiliriz. Her çağırdıktan sonra ekrana  merhaba yazdırılacaktır.
-Fonksiyonları "function" ile tanımlıyoruz.
-Fonksiyon isimleri "_", "$" ve harfle başlayabilir.
-Hiçbir zaman rakamla başlamaz.
-Aynı isimde iki fonksiyon yazılamaz.
-return ifadesi fonksiyonun yazıldığı yerde fonksiyonu bitirir.
Yani returndan sonra kod varsa onları fonsiyon değerlendirmez.

*/
function selamlama()
{
    console.log("merhaba");
}
selamlama(); /* burada çağırdık */
console.log("merhaba");

/* Dışarıdan parametre gönderme */

function selamlama(msg)
{
    console.log(msg);
}
selamlama("selam");


/* ÖRNEK */

function yasHesapla(dogumYili)
{
    return new Date().getFullYear() - dogumYili;
}

var yasAhmet= yasHesapla(1985);
var yasAyse= yasHesapla(1987);

console.log(yasAhmet, yasAyse);

function emekliligeKacYilKaldi(dogumYili, isim)
{
    var yas= yasHesapla(dogumYili);
    var kalan_sene =65 -yas;

    if(kalan_sene>0)
    {
         console.log(` ${isim}, emekli olmanıza  ${kalan_sene} yıl kaldı.`);
    
    }
    else
    {
        console.log("zaten emekli oldunuz.");
    }

    emekliligeKacYilKaldi(1980, "Ali");
    emekliligeKacYilKaldi(1950, "Ayşe");
}

// Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yazınız.

function kelimeYazdir(kelime, adet) 
{
    for (var i=0; i<adet; i++)
    {
        console.log(kelime);
    }
}
kelimeYazdir("merhaba", 4);

// Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.

function alanCevreHesapla (kisa, uzun)
{
    var alan =kisa*uzun;
    var cevre=(kisa+uzun)*2;

    return `alan: ${alan} çevre: ${cevre}`; 

}
var sonuc= alanCevreHesapla(7, 10);
sonuc= alanCevreHesapla(7,12);
console.log(sonuc);


// Yazı tura uygulamasını fonksiyon kullanarak yapınız.

function yaziTuraAt()
{
    var random= Math.random();
    console.log(random);

    if (random < 0.5)
    {
        console.log("yazı");
    }
    else
    {
        console.log("tura");
    }
    console.log(random);
}
yaziTuraAt();

// Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.

function toplam(a, b)
{
    return a+b;
}
console.log(toplam(2 ,5)); 


// ya da 

function toplam()
{
    var sonuc=0;
    for (var i=0; i< arguments.length; i++)
    {
        sonuc += arguments[i];
    }
    return sonuc;
}
console.log(toplam(2 ,5));
console.log(toplam(2, 5, 7));