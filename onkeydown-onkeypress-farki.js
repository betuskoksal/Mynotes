/* onkeypress ve onkeydown farkı:

İkisi de bir tuşa basıldığında tetiklenir.

----onkeydown----- :

-tuşa basıldığında çalışır, ancak tuşa basılı tutulduğu 
süre boyunca tekrar eden bir olaydır.

-Herhangi bir tuşa basıldığında tetiklenir, bu nedenle klavye 
üzerindeki tüm tuşları algılar.


----onkeypress----- :

-Herhangi bir klavye tuşuna basıldığında tetiklenir, ancak bazı tuşlar 
(Shift, Ctrl gibi) hariç tutulabilir.

-Tuşa basıldığında çalışır, ancak tuşa basılı tutulduğu süre boyunca 
tekrar eden bir olay değildir.


Kullanımına bağlı olarak, hangi olayın kullanılacağı duruma bağlıdır. 
Örneğin, kullanıcıya sadece harf veya rakam girmesine izin vermek istiyorsanız, 
onkeypress daha uygun olabilir. Ancak genel bir tuşa basma durumunu kontrol etmek istiyorsanız, 
onkeydown kullanmak daha uygundur.


*/