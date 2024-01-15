var sayilar=[1,5,7,15,3,25];
/*1-------Sayilar listesindeki her bir elemanın karesini yazdırın*/

for(var sayi of sayilar)
{
    console.log(sayi*sayi);
}






var sayilar=[1,5,7,15,3,25];
/*2------Sayilar listesindeki hangi sayılar 5"in katıdır?*/

for(var i=0; i<sayilar.length; i++)
{
    if(sayilar[i] % 5 == 0)
    {
        console.log(sayilar[i]);
    }
}





var sayilar=[1,5,7,15,3,25,12,24];
/*3------Sayilar listesindeki çift sayıların toplamını bulunuz*/
var toplam=0;
for(var i in sayilar)
{
    if(sayilar[i] % 2 == 0 )
    {
        toplam+= sayilar[i];
    }

}
console.log(toplam);







var urunler= ["iphone 12","samsung s22","iphone 13","samsung s23"];
/*4------urunler listesindeki tüm ürünleri büyük harf ile yazdırın */

for(var urun of urunler)
{
    console.log(urun.toUpperCase());
}






var urunler= ["iphone 12","samsung s22","iphone 13","samsung s23"];
/*4------urunler listesinde samsung geçen kaç ürün vardır?*/
 
var adet= 0;
for(var urun of urunler)
{
    if (urun.includes("samsung"))
    {
        adet++;
    }
}
console.log(adet);