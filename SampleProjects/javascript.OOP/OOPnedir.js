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
    let soru2 = new Soru("Hangisi .net paket yönetim uygulamasıdır?", {a: "Node.js", b: "Nuget", c: "Npm" }, "b");

let sorular = [
    new Soru = new Soru("Hangisi javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru = new Soru("Hangisi javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru = new Soru("Hangisi javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru = new Soru("Hangisi javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "Typescript", c: "Npm" }, "c")

];

function Quiz(sorular) {
    this.sorular= sorular;
    this.soruIndex = 0;
}

Quiz.prototype.soruGetir = function() {
    return this.sorular[this.soruIndex];
}

const quiz = new Quiz(sorular);

document.querySelector(".btn-start").addEventListener("click", function() {
    if (quiz.sorular.length != quiz.soruIndex) { 
    console.log(quiz.soruGetir());
    quiz.soruIndex += 1;
    }else {
        console.log("quiz bitti");
    }
})

