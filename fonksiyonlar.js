/* FONKSİYONLAR 
-Fonksiyon tanımladıktan sonra çalıştımak için çağırmamız gerekir.
-Fonksiyonu birden fazla kez çağırabiliriz. Her çağırdıktan sonra ekrana  merhaba yazdırılacaktır.

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
        console.log('${isim}, emekli olmanıza  ${kalan_sene} yıl kaldı.');
    }
    else
    {
        console.log("zaten emekli oldunuz.");
    }

    emekliligeKacYilKaldi(1980, "Ali");
    emekliligeKacYilKaldi(1950, "Ayşe");
}