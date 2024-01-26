/* onclick olayı

-Yazının üzerine sağ tık yapma anlamına gelir.
-Sağ tık yaptığımızda gerçekleşen değişikliklere verilen ad.
-Herhangi bir fonksiyon çalıştımak için kullanılabilir.
-Toplama yapmak için kullanılabilir.

*/

/* tarih ve saati gösteren onclick yapımı 

    <h1 onclick="icerikDegistir(this)"> Udemy Kursları </h1>

    <button onclick="displayDate()"> Tarih ve saati göster </button>

    <p id="tarihsaat"></p>

    <script type="text/javascript">

        function icerikDegistir(icerik)
        {
            icerik.innerHTML="Udemy Kurslarına Hoşgeldin";
        }

    function displayDate() {
        document.getElementById("tarihsaat").innerHTML=Date();
    } 
*/