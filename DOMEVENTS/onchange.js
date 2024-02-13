/* onchange nedir?

-HTML içindeki bir form öğesinin değeri değiştiğinde veya bir seçenek seçildiğinde 
tetiklenen bir JavaScript olayıdır. 

-Bu olay, genellikle form elemanları ile birlikte kullanılır ve kullanıcının bir 
giriş yapması veya bir seçenek seçmesi durumunda gerçekleştirilen işlemleri 
kontrol etmek için kullanılır.

*/



<select id="udemy" onchange="kontrol()">
    <option>Php</option>
    <option>Bootstrap</option>
    <option>Javascript</option>
    <option>Jquery</option>
</select>

/* onchange="kontrol()" özelliği, kullanıcı bir seçenek seçtiğinde "kontrol" adlı 
JavaScript fonksiyonunu tetikleyeceğini belirtir. */


function kontrol() {

    var x=document.getElementById("udemy").value;

    document.getElementById("sonuc").innerHTML="Seçtiğiniz Kurs : "+x;
}

/* -"kontrol" adlı bir fonksiyon tanımladık.

-document.getElementById("udemy") ifadesi, "udemy" id'sine sahip HTML elementini seçer 
(bu durumda <select> elementidir).

-".value" ifadesi, seçilen <select> elementinin değerini alır 
(yani, seçilen <option> etiketinin içeriğini).

-document.getElementById("sonuc").innerHTML ifadesi, 
"sonuc" id'sine sahip HTML elementinin içeriğini değiştirir.

-Seçtiğiniz Kurs : " + x ifadesi, seçilen kursun adını içeren bir metin oluşturur ve 
bu metni "sonuc" id'sine sahip <div> elementinin içine yerleştirir.

*/
