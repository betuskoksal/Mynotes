
var xhr= new XMLHttpRequest();
xhr.onreadystatechange = function() {

    if (xhr.readyState===4) {
        
        if(xhr.status===200) {
            console.log(xhr.responseText);
        }else if (xhr.status===404) {
            console.log('kaynak bulunamadı');
        }
    }
}


xhr.onprogress= function () {
    console.log('on progressing');
    }
    
xhr.open('GET','msg.text',true);
xhr.send();
console.log('hello');