/* -KOŞUL İFADELERİ-

if (otomatik koşul) --> eşitse bu komut çalışır
    {
    console.log(...);
    } 
else(değilse) --> bu komut çalışır
    {
    console.log(...);
    }

*/

/* İF ELSE ÖRNEK  */

var vites= "2";

if (vites=="1")
{
    console.log("araç manuel");
}
else if (vites="2")
{
    console.log("araç otomatik");
}
else
{
    console.log("yanlış bir değer");
}



/* SWİTCH */

var vites="2";
switch (vites)
{
    case"1":
        console.log("araç manuel");
        break;
    case"2":
        console.log("araç otomatik");
        break;
    default:
        console.log("yanlış bir değer");
        break;
}

/* Girilen doğum yıllarına göre ehliyet alnıp alınamayacağını hesaplayın ve 18'den küçük ise kaç yılı kalmıştır? */

var dogum= prompt ("doğum yılını girin");
var yil= "2023";
var yas=yil-dogum;

if (yas<18)
{
    console.log("ehliyet alamazsınız");
    console.log("ehliyet almak için"+(18-yas)+"yıl beklemelisiniz");    
}
else if (yas>=18)
{
    console.log("ehliyet alabilirsiniz");
}
else 
{
    console.log("yanlış bir değer");
}


