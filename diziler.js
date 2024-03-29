/*  DİZİLER

Birden fazla değeri bir dizide toplamak amacıyla  kullanılır. 
Diziler bir değikede birden fazla değer tutan bir değişken türüdür.
Dizi oluşturmak için [ ] kullanılır.
Dizi oluştururken "new Array" anahtar kelimesini kullanırız. 

- alert(liste.length); --> Dizi uzunluk özelliği
- alert(liste.sort);  --> Dizi sıralama fonksityonu

*/

/* PUSH NEDİR

Diziye yeni bir eleman eklemek için kullanılır. 
*/

var liste= ["elma", "armut", "portakal"];

liste.push ("muz");
console.log(liste);

/* UNSHİFT

Dizinin en başına eleman eklemek için kullanılır. 
*/

var liste= ["elma", "armut", "portakal"];

liste.unshift ("çilek");
console.log(liste);

/* DEĞİŞKENİN DİZİ OLDUĞUNU NASIL ANLARIZ? */

var liste= ["elma", "armut", "portakal"];

alert(typeof liste);
/* Dediğimizde sonucun object gelmesi gerekir. */


/* POP  

Dizinin en sonundaki elemanı pop kullanılarak  silinir.
*/

/* SHİFT  

Dizinin en başındaki elemanı shift kullanılarak  silinir.
*/

/* Tüm modelleri yazdırınız */

var  now= 2024;
var models= ["toyota","mazda","mercedes","opel" ];
var years= ["2015","2012","2016","2014" ];

for (var i=0; i<models.length; i++)
    {
        console.log(models[i]);
    }


/* Models ve years dizilerine eleman eklenebilsin */

var model=prompt("Model giriniz");
var year=prompt("Model yılını giriniz");

models.push(model);
years.push(year);

/*   ÖRNEKLER   */

/* "elma, armut, muz, çilek" elemanlarına sahip bir dizi oluştur */
var meyveler =["elma","armut","muz","çilek"];

/* Dizi kaç elemanlıdır? */
console.log(meyveler.lenght);


/* Dizinin ilk ve son elemanı nedir? */
/* İlk eleman */ console.log(meyveler[0]); /* (Elma) */

/* Son eleman */ console.log(meyveler[meyveler.lenght-1]); /* (Çilek) */


/* Elma dizinin bir elemanı mıdır? */
console.log(meyveler.indexOf ("Elma"));

/* Kiraz meyvesini listenin sonuna ekleyiniz */

meyveler[meyveler.lenght]="kiraz";
console.log (meyveler);

/* ya da */

meyveler.push("kiraz");
console.log(meyveler);

/* Dizinin son iki elemanını siliniz */

meyveler.pop();
meyveler.pop();
console.log(meyveler);






