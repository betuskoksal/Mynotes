
/*        MULTİPLE ELEMENTS

-Eleman seçerken birden fazla eleman gelecekse kullanırız.
-Yani aynı anda toplu eleman gelecekse kullanırız.

*/

/* Class name e göre eleman seçme işlemi */

sonuc=document.getElementsByClassName("task");

/* Tek bir elemana ulaşma işlemi */

sonuc=document.getElementsByClassName("task")[0];
sonuc=document.getElementsByClassName("task")[1];

/* Döngü aracılığı ile eleman seçme işlemi */

sonuc=document.getElementsByClassName("task")[0];
sonuc=document.getElementsByClassName("task")[1];

sonuc=document.getElementsByClassName("task");

for (var i=0; i<taskList.length; i++)
    {
        console.log(taskList[i]);
    }

        console.log(sonuc);

// ya da

for (var task of taskList)
{
    console.log(task);
}


/* Bütün elemanların rengini değiştirme işlemi */

for (var task of taskList)
{
    task.style.color="red";
}

/* Bütün elemanların yazı boyutunu değiştirme işlemi */

for (var task of taskList)
{
    task.style.fontSize="20px";
}

/* Bütün elemanların yazısını değiştirme işlemi */

for (var task of taskList)
{
    task.style.innerText="Item";
}

/* "li" elemanlarına ulaşma işlemi */

taskList=document.getElementsByTagName("li"); // Sayfa üzerinde bulunan bütün li elemanlarına ulaş demek


/* "ul" elemanını seçip istediğimiz "li" listesine ulaşmak için: */
ul= document.getElementById("task-list");
taskList=ul.getElementsByTagName("li"); 
// Bu sayede istediğimiz "ul" üzerinde dolaşarak bütün "li" elemanlarına ulaşabiliriz.


// Bütün "li" elemanlarına ulaşmak için 2.yol:
taskList = document.querySelectorAll("li");

taskList = document.querySelectorAll("#task-list li");
//Kapsam belirtebiliriz


