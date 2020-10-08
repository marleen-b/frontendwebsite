// JavaScript Document

var Menuknop = document.querySelector("nav button"); 
/*variabel aangemaakt om element te selecteren uit html waarmee de interactie start. */

Menuknop.addEventListener("click", toonMenu); /*Geselecteert element gaat iets doen, nadat erop geklikt is */

function toonMenu() {
    Menuknop.classList.Add("showMenu");
}

