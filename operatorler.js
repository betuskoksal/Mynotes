/* 1-MATEMATİKSEL OPERATÖRLER- */

sonuc=a++; /* a sonucun içine atanır ve yazdırılır. Sonra +1 artırılır.*/

sonuc=++a; /* Önce a artılır, sonra sonucun içine atanır. */

sonuc=a--; /* Önce atanır sonra -1  azalır. */

sonuc=--a; /* Önce azalır,sonra atanır. */

sonuc+=a;  /* sonuc= sonuc+a yani sonuc +a'yı topla tekrar sonuc içine ata demek  */

sonuc+=(a+b); /* sonuc= sonuc+a+b yani a+b+sonnucu  topla  ve en son sonuc değişkeni içine at demek */


x=10;

x++;  /* (x 1 artar) */
console.log(x);

x--;  /* (x 1 azalır) */
console.log(x);

/* 2-KARŞILAŞTIMA OPERATÖRLERİ- */
var x=10;
var y=20;
var z=10;

var sonuc= x>y;
console.log(sonuc);

/* 
===  --> tip kontrolü
==  --> değer kontrolü
*/

/* 3-MANTIKSAL OPERATÖRLER- */


/* -VE (&&)-
True  && True --> TRUE 
True  && False--> FALSE
False && True --> FALSE
*/

console.log((x>y)&&(x>z));
console.log((20>10)&&(30>20));
console.log((20>10)&&(30<=20));



/* -VE YA (||)-
True||True  -->TRUE
False||True -->TRUE
True||False -->TRUE
False||False-->FALSE
*/

console.log((20>10)||(30<=20));



/* -DEĞİL (!)-
N1!True -->FALSE
N2!False-->TRUE
N3!"CAT"-->FALSE
*/

console.log(x>z);
console.log(!(x>z));


/*  Kullanıcıdan alınan üç sayının büyüğünü bulalım  */

var a=prompt ("sayı giriniz"); /*a=10*/
var b=prompt ("sayı giriniz"); /*b=20*/
var c=prompt ("sayı giriniz"); /*c=30*/

console.log("a sayısı büyük mü?", (a>b)&&(a>c));
console.log("b sayısı büyük mü?", (b>a)&&(b>c));
console.log("c sayısı büyük mü?", (c>a)&&(c>a));


 
