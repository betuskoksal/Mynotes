/*DOM NEDİR?

-"DOM" kelimesi, "Document Object Model" ("Belge Nesne Modeli") ifadesinin kısaltmasıdır.

-DOM bir web sayfasının mantıksal yapısını formüle eden sayfa öğelerine
erişmenin yolunu belirleyen bir arayüzdür.

-HTML, SVG, XML gibi yapısal diller için bir arayüz görevi görmektedir.

-DOM ile bir ağaç gibi belgeye ulaşıp, belgenin yapısnı ve stilini değiştirmek mümkündür.

-DOM ile web sayfasındaki elemanların özelliklerine erişebilir ve bu özellikleri 
değiştirebilirsiniz.

-Belgenin içeriğini belirli bir düzen içerisinde nesne olarak temsil edilmesini 
sağlayan bir modeldir.

-JavaScript, DOM kullanarak web sayfasındaki nesnelere erişebilir 
ve bunları düzenleyebilir.

*/

/*

-val "value" ("değer") kelimesinin kısaltılmasıdır.

-"val" terimi genellikle bir form elemanının değerine erişme veya değeri 
değiştirme işleminde kullanılır.

-Bir form elemanının (input, select, textarea vb.) 
içerdiği değeri ifade eder.


*/

/* DOM ELEMENTLERİ ÜZERİNDE GEZİNME

-Kapsayıcı yani "ul" nin altındaki bütün elemanlara children sayesinde ulaşabiliriz. */
var ul = document.getElementById("task-List");
sonuc = ul.children[0];

// Children, firstchild, lastchild 

sonuc= ul.children;
sonuc= ul.children[0];
sonuc= ul.firstElementChild;


sonuc= document.getElementById("title");
console.log(sonuc);

// Seçtiğimiz elementin bir üst elemana ulaşmak için
sonuc= document.getElementById("title").parentElement;


// Seçtiğimiz elementin bir sonraki elemanına ulaşmak için
sonuc= document.querySelector(".task").nextElementSibling; // Classı task olana ulaş

// Sonrakinin de sonrasına ulaşmak için yine aynısını yazabiliriz
sonuc= document.querySelector(".task").nextElementSibling.nextElementSibling;

// Önceki elemanına ulaşmak için
sonuc= document.querySelector(".task").previousElementSibling;


/* <ul> altındali elementeri saymak için:

- var count = ul.children.length; // count listenin içindeki liste öğelerinin sayısını tutacak.

*/

