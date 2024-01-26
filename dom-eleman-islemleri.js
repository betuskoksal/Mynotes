/*----------------(ELEMAN EKLEME)  createElement:-------------------


<button onclick="islem()">Ekle</button>
<script type="text/javascript"> 

        function islem() {


            var e= document.createElement("p");
            console.log(e);
}
</script> 

*/

/*----------------(ELEMAN SİLME) removeChild:-----------------------

    <ul id="udemy">
        <li>Php</li>
        <li>Boootstrap</li>
        <li>JQuery</li>
        <li>JavaScript</li>
    </ul>

<button onclick="islem()">Sil</button>
    <script type="text/javascript"> 

        function islem() {


            var list=document.getElementById("udemy");
            console.log(list);
            list.removeChild(list.childNodes[0]); // Php silinir.

  }
    </script> 

/*----------------(ELEMAN EKLEME)  appendChild-createTextNode:--------

    <ul id="udemy">
        <li>Php</li>
        <li>Boootstrap</li>
        <li>JQuery</li>
        <li>JavaScript</li>
    </ul>

<button onclick="ekle()">Ekle</button>
    <script type="text/javascript"> 


        function ekle() {

            var e=document.createElement("LI");
            var x=document.createTextNode("WordPressss");
            console.log(e);
            e.appendChild(x);
            console.log(e);
            document.getElementById("udemy").appendChild(e);


         }

*/

/*----------------(ELEMAN DEĞİŞTİRME)  replaceChild:----------------

         function degistir() {
            var t=document.createTextNode("Emrah");
            console.log(t);
            var ekles=document.getElementById("udemy").childNodes[3];
            console.log(ekles);
            ekles.replaceChild(t,ekles.childNodes[0])
            
   }

*/