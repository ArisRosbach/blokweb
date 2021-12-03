// JavaScript Document

//////////////
// Buttons //
/////////////
var buttonElement1 = document.querySelector(".pagina1 section:first-of-type button");
var buttonElement2 = document.querySelector(".pagina1 section:nth-of-type(4) button");
var buttonElement3 = document.querySelector(".pagina1 section:nth-of-type(6) button");
var buttonElement4 = document.querySelector(".pagina1 section:nth-of-type(8) button");


function buttonVeranderd() {
 buttonElement1.classList.toggle("buttonAnders");
 console.log("ik ben geklikt");
}

function buttonVeranderd2() {
 buttonElement2.classList.toggle("buttonAnders");
}

function buttonVeranderd3() {
 buttonElement3.classList.toggle("buttonAnders");
}

function buttonVeranderd4() {
 buttonElement4.classList.toggle("buttonAnders");
}


buttonElement1.addEventListener("click", buttonVeranderd);
buttonElement2.addEventListener("click", buttonVeranderd2);
buttonElement3.addEventListener("click", buttonVeranderd3);
buttonElement4.addEventListener("click", buttonVeranderd4);


/////////////
// Hartjes //
////////////
var hartjeElement1 = document.querySelector(".pagina1 section:nth-of-type(5) article:first-of-type img:nth-of-type(2)");
var hartjeElement2 = document.querySelector(".pagina1 section:nth-of-type(5) article:nth-of-type(2) img:nth-of-type(2)");
var hartjeElement3 = document.querySelector(".pagina1 section:nth-of-type(5) article:nth-of-type(3) img:nth-of-type(2)");
var hartjeElement4 = document.querySelector(".pagina1 section:nth-of-type(5) article:nth-of-type(4) img:nth-of-type(2)");
var hartjeElement5 = document.querySelector(".pagina1 section:nth-of-type(5) article:nth-of-type(5) img:nth-of-type(2)");
var hartjeElement6 = document.querySelector(".pagina1 section:nth-of-type(5) article:nth-of-type(6) img:nth-of-type(2)");


function plaatjeVeranderd1() {
    hartjeElement1.src = 'images/PandoraHartVol.png';
    hartjeElement1.classList.add("hartjeVol");
    console.log("ik ben geklikt");
}

function plaatjeVeranderd2() {
    hartjeElement2.src = 'images/PandoraHartVol.png';
    hartjeElement2.classList.add("hartjeVol");
    console.log("ik ben geklikt");
}

function plaatjeVeranderd3() {
    hartjeElement3.src = 'images/PandoraHartVol.png';
    hartjeElement3.classList.add("hartjeVol");
    console.log("ik ben geklikt");
}

function plaatjeVeranderd4() {
    hartjeElement4.src = 'images/PandoraHartVol.png';
    hartjeElement4.classList.add("hartjeVol");
}

function plaatjeVeranderd5() {
    hartjeElement5.src = 'images/PandoraHartVol.png';
    hartjeElement5.classList.add("hartjeVol");
}

function plaatjeVeranderd6() {
    hartjeElement6.src = 'images/PandoraHartVol.png';
    hartjeElement6.classList.add("hartjeVol");
}


hartjeElement1.addEventListener("click", plaatjeVeranderd1);
hartjeElement2.addEventListener("click", plaatjeVeranderd2);
hartjeElement3.addEventListener("click", plaatjeVeranderd3);
hartjeElement4.addEventListener("click", plaatjeVeranderd4);
hartjeElement5.addEventListener("click", plaatjeVeranderd5);
hartjeElement6.addEventListener("click", plaatjeVeranderd6);
