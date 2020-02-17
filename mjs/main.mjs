import {anim_entete} from "./anim_entete.mjs";
import {creation_slider} from "./contenu_slider.mjs";

//création de l'objet qui contient les images du slider
let contenuSlider = {
    "images":[
        { "nom":"Kiwi", "lien":"../media/images/Kiwi.jpg"},
        { "nom":"Chameau", "lien":"../media/images/Camel.jpg"},
        { "nom":"Donkey Kong", "lien":"../media/images/DK.jpg"},
        { "nom":"Sandwich", "lien":"../media/images/sandwich.png"},
        { "nom":"Reese", "lien":"../media/images/reese.jpg"}
    ]
}

let elmEntete = document.querySelectorAll("header .global>*");
let elmSlides = document.querySelectorAll(".slide");

const animEntete = new anim_entete(elmEntete);
const creationSlider = new creation_slider(elmSlides,contenuSlider);
animEntete.anim();
creationSlider.genererImages()