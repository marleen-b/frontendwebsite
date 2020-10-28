// JavaScript Document
/*JS voor navigatie menuknop bij klein scherm */
var Menuknop = document.querySelector("header button"); 
var Navigatie = document.querySelector("nav");
/*variabel aangemaakt om element te selecteren uit html waarmee de interactie start. */

Menuknop.addEventListener("click", toonMenu); /*Geselecteert element gaat iets doen, nadat erop geklikt is */

function toonMenu() {
    Navigatie.classList.toggle("showMenu"); /* voegt een class toe aan de nav*/
}

/* JS voor animatie aanmelding nieuwsbrierf */
/* Zodra de gebruiker heeft aangemeld voor de nieuwsbrief speelt er een animatie af*/
var Aanmeldknop = document.querySelector("main section form button");
var Briefnanimatie = document.querySelector("section #nieuwsbriefanimatie")
/* variabel aangemaakt om element te selecteren uit de html waarmee de interactie start en variabel aangemaakt waarop de animatie wordt uitgevoerd*/

Aanmeldknop.addEventListener("click", speelanimatie); /*Button element gaat iets doen, nadat erop geklikt is */

function speelanimatie() {
    Briefnanimatie.classList.add("animatie") /*voegt een class toe aan de section met id nieuwsbriefanimatie*/
}
