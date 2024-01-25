/*
-DEĞİŞKEN TANIMLAMA-

-var değişkeninin özelliği-

-Değişken tanımlanırken "var, let, const" anahtar kelimelerinden biri kullanılır.

-var anahtar kelimesiyle tanımlanan değişkenler, fonksiyonlar.
içinde ve ya dışında tanımlanabilir.

-Değişken değeri her zaman değiştirilebilir.

*/


/* Değişkeni tarayıcıda tanımlamak için 3 yol

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


/* var ve let farkı nedir?

KAPSAM (SCOPE):
-var ile tanımlanan değişkenler fonksiyon kapsamına ait (function-scoped).
Eğer fonksiyon  içinde tanımlanmamışlarsa global(en kapsamlı) kapsama aittir. 

-Bu, değişkenin tanımlandığı fonksiyonun içinde erişilebileceği ve dışındaki kod tarafından 
görülemeyeceği anlamına gelir.

-let ile tanımlanan değişkenler, blok kapsamına aittir (block-scoped).
Blok kapsamı, genellikle {} ile tanımlanan kod bloklarını ifade eder (örneğin, if, for, while gibi).


YENİDEN TANIMLAMA:
-var: Aynı değişken adıyla tekrar var ile tanımlama yapılabilir ve bu durumda önceki değer üzerine yazılır.

-let: Aynı değişken adıyla tekrar let ile tanımlama yapmak hata verir.


/* COUNT 
-"count" genellikle bir sayıyı temsil eden bir değişken adıdır.

-Bu adı kullanarak genellikle bir sayma veya hesaplama işlemi yapıldığını ifade eder. 

-"count" değişkeni, bir dizi veya liste içindeki öğelerin sayısını veya 
bir döngü içinde kaç kere belirli bir şart sağlandığını saymak gibi işlemlerde kullanılabilir.

-"count" bir değişken adıdır ve bu adla tanımlanan bir değişkeni temsil eder. 
Genellikle sayma veya hesaplama işlemlerinde kullanılır. 

-Ancak, sadece "count" kelimesiyle bir değişken tanımlanmaz, genellikle bu ismi taşıyan bir değişken tanımlandıktan sonra kullanılır.
*/

/* CONST

-Bir değişkenin const ile tanımlanması, bu değişkenin değerinin bir kez atanabileceği ve 
daha sonra değiştirilemeyeceği (sabit) anlamına gelir.

-const ile tanımlanan bir değişkene bir değer atanmalıdır ve bu değer bir kez atanır. 

-Bir kez atandıktan sonra const ile tanımlanan değişkenin değeri değiştirilemez. 

-

*/

var count = 10; // "count" adında bir değişken tanımlandı ve 10 değeri atanmış.
console.log(count); // Bu değişkenin değeri (10) konsola yazdırılır.


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



