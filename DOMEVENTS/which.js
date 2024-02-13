/* which nedir ?

-Klavye olayı (keyboard event) nesnesinin bir özelliğidir. 

-Bu özellik, bir klavye olayı sırasında basılan tuşun Unicode karakter 
kodunu veya özel bir tuşun bir sayısal değerini içerir.

-which özelliği, genellikle keydown, keypress, ve keyup gibi klavye olayları 
ile birlikte kullanılır. Bu özellik, olayı tetikleyen tuşun sayısal bir değerini içerir.

-

*/

document.addEventListener("keydown", function(event) {
    console.log("Basılan Tuşun Unicode Değeri: " + event.which);
});

/*
Bu örnekte, bir tuşa basıldığında keydown olayı tetiklenecek ve event.which özelliği 
kullanılarak basılan tuşun Unicode değeri konsola yazdırılacaktır.
*/