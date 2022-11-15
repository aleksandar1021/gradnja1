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
let boxDescription = new Array ("IYGRADNJA OBJEKATA", "REKONSTRUKCIJA", "ELEKTRO RADOVI")
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

//projects galerija sa funkcijom sa argumentima

function fun(x, y) {
    document.getElementById("tekst-opis").innerHTML = y;
    var z = document.getElementsByClassName("slikaa");
    document.getElementById("pozornicaslika").src = z[x].src;
}
