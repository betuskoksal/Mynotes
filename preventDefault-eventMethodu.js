/* addEventListener nedir?

-Herhangi bir olayı dinleyip o olay gerçekleştiği zaman 
bir fonksiyona yönlendirilmesini sağlar.

*/

/* event.preventDefault() nedir?

-Fonksiyonu, bir olayın varsayılan davranışını engellemek için kullanılır.

-Bir HTML öğesi üzerinde bir olay gerçekleştiğinde (örneğin, bir bağlantıya tıklama, bir formun gönderimi gibi), 
tarayıcı varsayılan davranışı gerçekleştirecektir. event.preventDefault() bu varsayılan davranışı iptal eder.

*/


// Virgülden sonraki fonsiyonu çalıştırır

document.getElementById("sec").addEventListener("click", function (event) { //click olayı gerçekleştiğinde fonksiyonu çalıştır demek

    event.preventDefault() // Linkin çalışmasını engelledi
} )
 



/*Kapattığımızda link çalışır */

document.getElementById("sec").addEventListener("click", function (event) {
//event.preventDefault() 
})