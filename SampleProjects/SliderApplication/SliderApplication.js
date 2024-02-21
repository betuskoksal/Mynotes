var books =[ 

    { 
        name : "Franz Kafka Metamorphosis",
        image : "img/1img.jpg",
        link : "https://www.amazon.co.uk/Metamorphosis-Franz-Kafka-ebook/dp/B0C5G75G6Z"
    },
    
    {
        name : "Crime and Punishment Fyodor Dostoevsky",
        image : "img/2img.jpg",
        link : "https://www.amazon.com.tr/Punishment-Chartwell-Classics-Fyodor-Dostoyevsky/dp/0785841733"
    },
    
    
    {
        name :"The Hitchhiker's Guide to the Galaxy Douglas Adams",
        image : "img/3img.jpg",
        link :"https://www.amazon.com.tr/Hitchhiker-Guide-Galaxy-25th-Anniversary/dp/1400052920"
    
    },
    
    
    {
        name :"The Adventures of Sherlock Holmes",
        image : "img/4img.jpg",
        link : "https://arcus-www.amazon.com.tr/Adventures-Sherlock-Holmes-Puffin-Classics/dp/0141332492"
    
    }
    
    ];
    
    var index=0;
    var slaytCount = books.length;
    
    showSlide(index);
    
    document.querySelector(".sol").addEventListener("click",function() {
    index--;
    showSlide(index);
    console.log(index);
    });
    
    
    document.querySelector(".sag").addEventListener("click",function() {
    index++;
    showSlide(index);
    console.log(index);
    });
    
    function showSlide(i) {
    
    index.i;
    
    
    document.querySelector(".card-title").textContent = books [index].name;
    
    document.querySelector(".card-img-top").setAttribute("src", books[index].image);
    
    document.querySelector(".card-link").setAttribute("href", books [index].link);
    
    
    
    }