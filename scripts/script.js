// JavaScript Document

//////////////
// Buttons //
/////////////
var buttonElementSection4 = document.querySelector(".pagina1 section:nth-of-type(4) button");
var imgElementSection4 = document.querySelector(".pagina1 section:nth-of-type(4) img");

var buttonElementSection6 = document.querySelector(".pagina1 section:nth-of-type(6) button");
var imgElementSection6 = document.querySelector(".pagina1 section:nth-of-type(6) img");

var buttonElementSection5 = document.querySelector(".pagina2 section:nth-of-type(5) button");
var imgElementSection5 = document.querySelector(".pagina2 section:nth-of-type(5) img");


function buttonVeranderdSection4() {
    imgElementSection4.classList.toggle("imgDraaien");
    console.log("ik ben ook geklikt");
}

function buttonVeranderdSection6() {
    imgElementSection6.classList.toggle("imgDraaien");
    console.log("ik ben ook geklikt");
}

function buttonVeranderdSection5() {
    imgElementSection5.classList.toggle("imgDraaien");
    console.log("ik ben ook geklikt");
}

if (buttonElementSection4) {
    buttonElementSection4.addEventListener("click", buttonVeranderdSection4);
}
if (buttonElementSection6) {
    buttonElementSection6.addEventListener("click", buttonVeranderdSection6);
}
if (buttonElementSection5) {
    buttonElementSection5.addEventListener("click", buttonVeranderdSection5);
}



/////////////
// Hartjes //
////////////
var hartjeElement1 = document.querySelector(".pagina1 section:nth-of-type(5) ul li:first-of-type img:nth-of-type(2)");
var hartjeElement2 = document.querySelector(".pagina1 section:nth-of-type(5) ul li:nth-of-type(2) img:nth-of-type(2)");
var hartjeElement3 = document.querySelector(".pagina1 section:nth-of-type(5) ul li:nth-of-type(3) img:nth-of-type(2)");
var hartjeElement4 = document.querySelector(".pagina1 section:nth-of-type(5) ul li:nth-of-type(4) img:nth-of-type(2)");
var hartjeElement5 = document.querySelector(".pagina1 section:nth-of-type(5) ul li:nth-of-type(5) img:nth-of-type(2)");
var hartjeElement6 = document.querySelector(".pagina1 section:nth-of-type(5) ul li:nth-of-type(6) img:nth-of-type(2)");


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


if (hartjeElement1) {
    hartjeElement1.addEventListener("click", plaatjeVeranderd1);
}
if (hartjeElement2) {
    hartjeElement2.addEventListener("click", plaatjeVeranderd2);
}
if (hartjeElement3) {
    hartjeElement3.addEventListener("click", plaatjeVeranderd3);
}
if (hartjeElement4) {
    hartjeElement4.addEventListener("click", plaatjeVeranderd4);
}
if (hartjeElement5) {
    hartjeElement5.addEventListener("click", plaatjeVeranderd5);
}
if (hartjeElement6) {
    hartjeElement6.addEventListener("click", plaatjeVeranderd6);
}
