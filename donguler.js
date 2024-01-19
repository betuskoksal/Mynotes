/*     FOR DÖNGÜSÜ 
Bir kod bloğunu belirli bir sayıda ve üst üste çalıştırmak için kullanılan döngüdür.
*/
for (var i=1; i<11; i++)
{
    console.log(i);
}


/*     WHİLE DÖNGÜSÜ 
Önceden belirlenmiş bir koşul bozulana kadar devam  eder. Belirlenen komut bloğunu koşul  sağlandığı sürece çalıştıran döngüdür.
*/

var i=0;
while (i<10)
{
    console.log(i);
    i++;
}

/*     FOR  VE WHİLE ARASI FARK  
En temel fark döngünün ne zaman  sonlandırılacağıdır. 
For döngüsü belirli bir koşula kadar döngüyü çalıştırır.
While döngüsü belirli bir koşul doğru olduğu sürece döngüyü çalıştırır.
*/

/* While ile 1'den 10'a kadar olan sayıları yazdır */

var i=1;
while(i<=10)
{
    console.log(i);
    i++;
}

/* For ile 1'den 10'a kadar olan sayıları yazdır */

for(var i=1; i<=10; i++;)
{
    console.log(i);
}


/*  BREAK-CONTINUE FARKI   

Break anahtar kelimesi ile  bir döngüyü ve ya kodu sonlandırabiliyıoruz.
Continue anahtar kelimesi  ile bir döngü içerisindeki kodların bir  defalık 
çalışmadan döngüye devam etmesini sağlayabilyoruz.
*/

/* BREAK */

for (var i=1; i<=100; i++)
{
        if(i==50)
        {
        break;
        } 
    console.log(i); 
}

/*  CONTİNUE */

for (var i=1; i<=100; i++)
{
        if(i==50)
        {
        continue;
        }
    console.log(i);    
    }


/*  For döngüsü ile 10-100 arasındaki sayıları yazdırın */

for (var i=10; i<100 i++)
    {
        console.log(i);  
    }


/*  While döngüsü ile 10-100 arasındaki sayıları 5'er 5'er yazdırın */

var i=10;
while (i<=100)
{
    console.log(i);
    i=i+5;
}


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