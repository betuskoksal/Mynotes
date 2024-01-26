
/*           SELECTİNG SİNGLE ELEMENTS 

-Eleman seçerken bize gelecek olan eleman bir taneyse kullanırız.

*/

/* Sayfada bulunan bir id değerine göre seçim yapma: 
-Sayfadaki id si "header" olan elemanı seç demek*/

val= document.getElementById("title");

// ya da 
sonuc= document.querySelector("#title"); 


/*  Seçtğimiz elemanın id sine ulaşma:  */

val= document.getElementById("title").id;  // ya da 


// tanımladıktan sonra kısaltmak için kullanabilirsin
val = val.id;



/*  Seçtğimiz elemanın class ına ulaşma:  */

val= document.getElementById("header").className;

// tanımladıktan sonra kısaltmak için kullanabilirsin
val = val.className;



/*  Seçtğimiz elemanın style ine ulaşma:  */

val.style.fontSize="45px";
console.log(val);



/* Ulaştığımız değeri sayfa üzerinden kaybemek için:  */
document.getElementById("title").style.display="none";


/* Ulaştığımız elementin yazılarını değiştirmek için:  */
document.getElementById("title").innerText="Todo App";
document.getElementById("title").innerHTML="<p>Todo App</p>"; //etiket değiştirmek için


/* Elemana class olarak ulaşmak için:  */

sonuc= document.querySelector(".card-header");


/* Elemana div olarak ulaşmak için:  */

sonuc= document.querySelector("div");