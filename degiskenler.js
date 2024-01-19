/*
-DEĞİŞKEN TANIMLAMA-
var name="Fikret";

-Değişkeni tarayıcıda tanımlamak için 3 yol-
1) console.log(Name);
2) alert(Name);
3)document.write(Name);

*/

var name="Fikret";
console.log(Name);
Name="Baki";
console.log(Name);
var surname="Çevik";
console.log(surname);

/*
-JAVA SCRİPT EKRANA YAZDIRMA YÖNTEMLERİ

1-HTML ekranlarına yazdırma (innerHTML)
2-HTML sayfasına yazdırma  (document.write)
3-Açılır uyarı penceresine yazdırma (alert())
4-Browser konsoluna yazdırma (console.log())


DEĞİŞKEN TANIMLAMA KURALALLARI
-Türkçe  karakter kullanılamaz
-Sayı ile başlamaz
-Sembol olark _ ve $ kullanılır
-Camel Case: ogrenciAd, userName, notDurum
-Pascal Case: OgrenciAd, UserName, NotDurum
-Snakecase: ogrenci_ad, user_name, not_durum

*/


/* 
-var değişkeninin özelliği-

-Değişken tanımlanırken "var, let, const" anahtar kelimelerinden biri kullanılır
-var anahtar kelimesiyle tanımlanan değişkenler, fonksiyonlar
içinde ve ya dışında tanımlanabilir.
-Değişken değeri her zaman değiştirilebilir.

*/

/* -Yan yana yazdırma- */

var Name="betül";
var surname="köksal";
console.log(Name+surname);

/* -Araya boşluk bırakma- */

console.log(Name+" "+surname);


/* DEĞİŞKEN TÜRLERİ
1-NUMBER
var x=10;

2-STRING
var name="Betül";

3-BOOLEAN
var sinavNotu=40;
var  basailimi=(sinavNotu>=50);

4-UNDEFINED
Değer atanmamış bir değişkeni temsil eder.

var yas;
console.log(yas);
yas değişkeni tanımlayıp içine bir değer atamazsak sonuc underfined olur  

5-NULL
Bilinçli olarak boş bir değer atanmış değişkeni temsil eder.

var x=null;

6-OBJECT(NESNE)
Özellikler ve değerlerin birleşimidir.
Toplu veri tutmamıza  yarayan veri tipidir.

var ogrenci={ };

7-ARRAY(DİZİ)
Bir diziye ait öğeleri  saklamak için kullanılır.

var numbers=[1,2,3,4...];

8-FUNCTION(FONKSİYON)
Bir işlevi temsil eder.

function gree (name)
    {
        console.log("merhaba, ${name}!");
    }

9-SYMBOL
Benzersiz ve değiştirilemez veri türüdür.

const id=Symbol("id");

10-BIGLNT
Uzun tam satyılar

4567895676n

*/



