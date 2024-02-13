/* parseInt (Parse Integer) nedir?

-JavaScript dilinde bir fonksiyondur ve bir karakter dizisini tamsayıya dönüştürür. 
-Genel olarak, bu fonksiyon bir stringin başındaki rakamları alır ve bunları 
bir tamsayıya çevirir.

*/

var sayi1=parseInt(document.getElementById("sayi1").value); 
/* 
-Bu satır, "sayi1" id'sine sahip bir HTML elemanının değerini alır. 
-Eğer bu HTML elemanı bir metin giriş alanı ise, value özelliği, kullanıcının 
girdiği metni içerir. 

-Bu değer genellikle bir sayı olması bekleniyorsa, parseInt fonksiyonu 
kullanılarak bu metin sayıya dönüştürülür.

*/ 

<button id="hesap" onclick="hesapla()">Hesaapla</button>

/*
-Bu satır, HTML dokümanında bir düğme (button) elementini temsil eder 
ve id özelliği "hesap" olarak belirlenmiştir. 

-Aynı zamanda, bu düğme üzerine tıklanıldığında çağrılacak olan bir 
-JavaScript fonksiyonu belirlenmiştir. Bu fonksiyonun adı "hesapla()" olarak 
belirtilmiştir.

-Bu düğme, kullanıcı tarafından tıklandığında (onclick), hesapla() adlı bir 
JavaScript fonksiyonunu çağıracaktır. Bu fonksiyon genellikle bir hesaplama 
işlemi veya kullanıcının girdiği verileri kullanarak belirli bir işlemi 
gerçekleştirecek bir fonksiyon olabilir.

-JavaScript kodu içinde, hesapla() fonksiyonunun tanımlanmış ve 
bu fonksiyonun düğme tıklandığında çalışacak işlemleri içermesi beklenir. 
Örneğin, form elemanlarından değerleri almak, işlem yapmak ve sonucu ekrana 
yazmak gibi işlemler bu fonksiyon içinde gerçekleştirilebilir.
*/