/*  1-sipariş bilgierini object içerisinde saklayınız 
    2-Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplyınız (kdv %18)
siparis id: 101
siparis tarihi: 31.12.2023
ödeme sekli: kredi kartı
kargo adresi: Yahya kaptan mah. Kocaeli İzmit


satın alınan ürünler:
    ürün id: 5
    ürün başlğı:Iphone 13 Pro
    ürün url:http://abc.com/Iphone-13-Pro
    ürün fiyatı:22800

    ürün id:6
    ürün başlığı: Iphone 13 Pro Max
    ürün url:http://abc.com/Iphone-13-Pro-Max
    ürün fiyatı: 25000

    müşteri:
        müşteri id:12

    satıcı:
        firma id:34
        firma adı: Apple Türkiye

        sipariş id: 102
        sipariş tarihi: 30.12.23
        kargo adresi:Yahya kaptan mah. Kocaeli İzmit

        satın alınan ürünler:
    ürün id: 6
    ürün başlğı:Iphone 13 Pro Max
    ürün url:jjjj
    ürün fiyatı:25000

    müşteri:
        müşteri id:12

    satıcı
        firma id:34
        firma adı: Apple Türkiye

    

*/

var siparis_1=
{
    "siparis id": "101",
    "siparis tarihi": "31.12.2023",
    "ödeme sekli": "kredi kartı",
    "kargo adresi": 
    {   "mahalle":"Yahya kapta",
        "ilce":"İzmit",
        "sehir": "Kocaeli" 
    }, 
    "urunler": [
        {   "urun_id":"5",
            "urun_adi":"Iphone 13 Pro",
            "urun_url":"http://abc.com/Iphone-13-Pro",
            "urun_fiyat":22000
        },
        {   "urun_id":"6",
            "urun_adi":"Iphone 13 Pro Max",
            "urun_url":"http://abc.com/Iphone-13-Pro-Max",
            "urun_fiyat":25000
        }
    ]
}


var siparis_2=
{
    "siparis id": "102",
    "siparis tarihi": "30.12.2023",
    "ödeme sekli": "kredi kartı",
    "kargo adresi": 
    {   "mahalle":"Yahya kapta",
        "ilce":"İzmit",
        "sehir": "Kocaeli" 
    }, 
    "urunler": [
        {   
            "urun_id":"6",
            "urun_adi":"Iphone 13 Pro Max",
            "urun_url":"http://abc.com/Iphone-13-Pro-Max",
            "urun_fiyat":25000
        }
    ]
}

var siparis1_toplam= (siparis_1.urunler[0].urun_fiyat + siparis_1.urunler[0].urun_fiyat) * 1.18;
var siparis2_toplam= (siparis_1.urunler[0].urun_fiyat) * 1.18;
var toplam_siparis= siparis1_toplam + siparis2_toplam;

console.log("siparis 1:" + siparis1_toplam);
console.log("siparis 2:" + siparis2_toplam);

console.log("toplam ödenen miktar", toplam_siparis); 

var siparisler =[siparis_1, siparis_2]

