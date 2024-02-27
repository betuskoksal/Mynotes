// OOP: Nesne tabanlı programlama
// Objct

/*  let soru = {
    soruMetni: "Hangisi javascript paket yönetim uygulamasıdır?",
    cevapSecenekleri: {
        a:"Node.js",
        b:"Typescript",
        c:"Npm"
    },
    dogruCevap: "c",
    cevabiKontrolEt: function(cevap) {
        return cevap === this.dogruCevap
    }
}


let soru2 = {
    soruMetni: "Hangisi .net paket yönetim uygulamasıdır?",
    cevapSecenekleri: {
        a:"Node.js",
        b:"nuget",
        c:"Npm"
    },
    dogruCevap: "b",
    cevabiKontrolEt: function(cevap) {
        return cevap === this.dogruCevap
    }
}

console.log(soru.soruMetni);
console.log(soru.cevabiKontrolEt("c"));
console.log(soru.cevabiKontrolEt("b"));
*/




//  NESNE OLUŞTURMA: CONSTRUCTOR

    function Soru (soruMetni, cevapSecenekleri, dogruCevap) {
        this.soruMetni = soruMetni;
        this.cevapSecenekleri = cevapSecenekleri;
        this.dogruCevap = dogruCevap;
        this.cevabiKontrolEt = function(cevap) {
            return cevap === this.dogruCevap
        };
    }

    let soru1 = new Soru("Hangisi javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "Typescript", c: "Npm" }, "c");
    let soru2 = new Soru("Hangisi .net paket yönetim uygulamasıdır?", {a: "Node.js", b: "nuget", c: "Npm" }, "b");

let sorular = [
    new Soru = new Soru("Hangisi js paket yönetim uygulamasıdır?", {a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru = new Soru("Hangisi javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru = new Soru("Hangisi javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru = new Soru("Hangisi javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "Typescript", c: "Npm" }, "c")

];
    console.log(soru1.soruMetni);
    console.log(soru1.dogruCevap);
    console.log(soru1.cevabiKontrolEt("c"));
    console.log(soru1.cevabiKontrolEt("a"));
