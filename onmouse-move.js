/* onemousemove nedir?

-Bir nesnenin üzerindeki dolaşma hareketlerini yakalama olayı

-kullanıcının fare imleci (mouse cursor) üzerinde bir hareket gerçekleştirdiğinde 
tetiklenir. Bu, fare imleci sayfa üzerinde hareket ettiğinde veya bir 
nesne üzerinde gezinildiğinde gerçekleşir.

-Bir web sayfasında kullanıcı fare imlecini hareket ettirdiğinde, 
bu olay tetiklenir ve belirli bir JavaScript işlevi veya kod bloğu 
çalıştırılabilir. Bu sayede, kullanıcı fareyi belirli bir alana 
getirdiğinde veya belirli bir nesnenin üzerine geldiğinde özel işlevler 
gerçekleştirilebilir.

*/


/* Fare buton üzerine geldiğinde X ve Y koordinatlarını gösteren kodları yazın

<button onmousemove="dolas(this)">Üzerinde Dolaş</button>
    <div id="sonuc"></div>

<script>

    function dolas(sonuc) {

        var x=event.clientX;  //fare imlecinin X koordinatını temsil eden bir özelliktir.
        var y=event.clientY;  //fare imlecinin Y koordinatını temsil eden bir özelliktir.
        var top="X Koordinatı "+x+ "Y Koordinatı "+y;
        sonuc.innerHTML=top;
    }

</script>

*/