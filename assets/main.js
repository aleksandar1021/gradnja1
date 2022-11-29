//dinamicki nav meni
let navMenuEl=document.getElementById("navMenu");
let ulValues = new Array ("HOME", "ABOUT","PROJECTS", "STAFF","CONTACT")
let ulHref = new Array ("#1","#2","#3","#4","#5")
let navMenu = `<ul id="lista">`;
for(let i=0;i<ulValues.length; i++){
    navMenu+=`<li><a href="${ulHref[i]}">${ulValues[i]}</li>`
}
navMenu+=`</ul>`
navMenuEl.innerHTML = navMenu;

//dinamicki ispis bokseva
let boxElem = document.getElementById("boxCase");
let boxHref = new Array ("assets/img/ser1.png","assets/img/ser2.png","assets/img/ser3.png")
let boxAlt = new Array ("slika1","slika3","slika3");
let boxDescription = new Array ("IZGRADNJA OBJEKATA", "REKONSTRUKCIJA", "ELEKTRO RADOVI")
let boxes = "";
for(let i=0;i<boxHref.length;i++){
    boxes+=`<div class="box"><img src="${boxHref[i]}" alt="${boxAlt[i]}"/><p>${boxDescription[i]}</p></div>`;
}
boxElem.innerHTML = boxes;

//dinamicki ispis liste za drustvene mreze
let mediaEl = document.getElementById("media");
let mediaHref = new Array ("facebook", "twitter", "linkedin", "instagram");
let medias = `<ul id="listaMedia">`;
for(let i=0;i<mediaHref.length;i++){
    medias += `<li class="ikonice"><i class="zmdi zmdi-${mediaHref[i]}"></i>`
}
medias += `<ul>`;
mediaEl.innerHTML = medias;

//otvaranje padajucce liste za nav menu
let dugmeZaHamburger = document.getElementById("hamburger");
let navPadajuci = document.getElementById("navMenu");
let lista = document.getElementById("lista");
dugmeZaHamburger.addEventListener('click',()=>{
     if(navPadajuci.hasAttribute("class")){
         navPadajuci.classList.remove("display-block");
         navPadajuci.removeAttribute("class");
     }
     else{
        navPadajuci.classList.add("display-block");
     } 
});

//dadatan opis klik na dugme i uklanjanje
let dugmeOpis = document.getElementById("dugmeOpis");
let opisPadajuciTekst = document.getElementById("dodatanOpis")
dugmeOpis.addEventListener('click',()=>{
    if(opisPadajuciTekst.hasAttribute("class")){
        opisPadajuciTekst.classList.remove("display-block");
        dugmeOpis.innerText = "Pročitaj više";
        opisPadajuciTekst.removeAttribute("class");
    }
    else{
        opisPadajuciTekst.classList.add("display-block");
        dugmeOpis.innerText = "Zatvori";
    }
});

//galerija dinamicka ispis
let galDinamicka = `<div class="row">`;
let galSlikeNizLink = new Array ("kuca2","kuca1","kuca4","kuca5","kuca6","kuca7","kuca8","kuca9","kuca10");
let nizPovKuca = new Array (150,250,308,270,190,350,159,238,290);
let nizCenaKuca = new Array ("225.000,00","375.000,00","465.000,00","405.000,00","285.000,00","525.000,00","238.500,00","357.000,00","435.000,00");
for(let i=0;i<galSlikeNizLink.length;i++){
    galDinamicka +=
    `<div class="icon">
        <img class="slikaa" src="assets/img/${galSlikeNizLink[i]}.jpg" alt="kuca${i+1}" onclick="fun(${i}, 'Projekat ${i+1}, površina: ${nizPovKuca[i]} <sup>2</sup>, cena: ${nizCenaKuca[i]}&euro;')"/>
     </div>`;
     if(!((i+1)%3)){
        galDinamicka += `</div><div class="row">`;
     }
}
galDinamicka+=`</div>`
document.getElementById("galerijaDin").innerHTML = galDinamicka;

//projects galerija sa funkcijom sa argumentima
function fun(x, y) {
    document.getElementById("tekst-opis").innerHTML = y;
    var z = document.getElementsByClassName("slikaa");
    document.getElementById("pozornicaslika").src = z[x].src;
}


//kalkulator


var spanTagCena = document.querySelector("#span");
let dugmeCena = document.querySelector("#dugmeCena");
let dugmeBrisi = document.querySelector("#dugmeBrisi");
dugmeCena.addEventListener('click', ()=>{
    let valueCalc = document.querySelector("#unosPov").value;
    
    var select = document.getElementById('check');
    var text = select.options[select.selectedIndex].text;
    if(text == "Investitor"){
        var cena = valueCalc * 1.5;
    }
    else{
        var cena = valueCalc * 1.3;
    }
   
    if(valueCalc =="" && text == "Status"){
        spanTagCena.innerHTML ="Unesite povrsinu u metrima kvadratnima i status (fizicko lice/investitor)";
    }

    else if(valueCalc ==""){
        spanTagCena.innerHTML ="Uneta vrednost mora biti broj !"
    }
    else if(text == "Status"){
        spanTagCena.innerHTML ="Unesite STATUS !"
    }
    else{
        spanTagCena.innerHTML=`Cena izgradnje iznosi: ${cena}`;
    }
    console.log(text)
    
});

dugmeBrisi.addEventListener('click',()=>{
    document.querySelector("#unosPov").value="";
    spanTagCena.innerHTML="";
});

let imeCheck = document.getElementById("txt-ime");
var err = document.getElementsByClassName("err")
imeCheck.addEventListener("focus",()=>{
    imeCheck.classList.add("okvir");
    imeCheck.classList.remove("okvir-greska")
})
let errIme = document.getElementById("err-ime");
imeCheck.addEventListener("blur",()=>{
    imeCheck.classList.remove("okvir");
    imeCheck.classList.add("okvir-greska")
    errIme.classList.add("err-ime-block");
})


//slajder
let slajderIndex = 1;
slajder(slajderIndex);
function slajdPlusMinus(n){
    slajder(slajderIndex+=n);
}
function trenutniSlajd(n){
    slajder(slajderIndex=n);
}
function slajder(n) {
    let slajdovi = document.getElementsByClassName("slajd");
    
    if (n > slajdovi.length) {slajderIndex = 1;}
    if(n < 1) { slajderIndex = slajdovi.length;}
    for (let i = 0; i < slajdovi.length; i++) {
      slajdovi[i].classList.remove("prviS");
    }
    slajdovi[slajderIndex-1].classList.add("prviS");
  }