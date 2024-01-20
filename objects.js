/*  OBJECTS
-Nesne değişken türüdür.
-Nesneler birden fazla değer alabilir.
    var araba={marka:"Fiat", model:"500", renk:"beyaz"};
    var bilgiler={ ad:"Yusuf", soyad:"Sezer"};
-Javascript nesne işleri nesne özelliklerinde function olarak saklar.
-Anahtar kod verereko anahtar aracılığıyla hangi bilgiye ulaşacağımızı 
 tanımlamış oluyoruz.
-Obje içinde obje tanımlayabilriz.

*/

    var kullanici=
    {
        "adres":
        {
            "sehir":"Kocaeli",
            "ilce":"İzmit",
        }
    }

    var sonuc ;
    sonuc=kullanici.adres.sehir;
    sonuc=kullanici.adres.ilce;
    console.log(sonuc);


/*  OBJE İÇİNDE DİZİ TANIMLAMASI  */

    var kullanici=
    {
        "adres":
        {
            "sehir":"Kocaeli",
            "ilce":"İzmit",
        },
        "hobiler":["sinema","spor"]
    }

    var sonuc;
    sonuc=kullanici.hobiler[0];
    console.log(sonuc);


/*  OBJE İÇİNDE DİZİ TANIMLAMASI  */

var urunler=

[
    { 
        "urun_adi":"Samsung s22",
        "urun_fiyat":13000,
    },
    {
        "urun_adi":"Samsung s23",
        "urun_fiyat":15000,
    }
]

sonuc=urunler[0].urun_adi;
console.log(sonuc);


/* DİZİLER VE OBJECTS(NESNELER) ARASINDAKİ FARK

-Diziler sıra numarası kullanır.
-Nesneler üye isimlerini kullanır.
-Adlandırılmış dizileri desteklemez.
-Üye isimleri ile erişmek istenirse nesneler kullanılbilir.
-Değerlere sıra numarası ile erişmek istenirse diziler kullanıalbilir.

*/


/* UYGULAMA */

var sayilar=[1,4,5,8,4,3];
console.log(sayilar[0]+sayilar[1]+sayilar[2]+sayilar[3]+sayilar[4]+sayilar[5]);
for (var i=0; i<sayilar.lenght; i++)
    {
        console.log(sayilar[i]);
    }

    













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

