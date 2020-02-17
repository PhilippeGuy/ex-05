import {anim_entete} from "./anim_entete.mjs";
import {contenu_slider} from "./contenu_slider.mjs";

//création de l'objet qui contient les images du slider
let imagesSlider = {
    "images":[
        { "nom":"Kiwi", "lien":"images/Kiwi.jpg"},
        { "nom":"Chameau", "lien":"images/Camel.jpg"},
        { "nom":"Donkey Kong", "lien":"images/DK.jpg"},
        { "nom":"Sandwich", "lien":"images/sandwich.png"},
        { "nom":"Reese", "lien":"images/reese.jpg"}
    ]
}

let elmEntete = document.querySelectorAll("header .global>*");
let elmSlides = document.querySelectorAll(".slide");


console.log(elmSlides);

const animEntete = new anim_entete(elmEntete);
const contenuSlider = new contenu_slider(elmSlides,imagesSlider);
animEntete.anim();
contenuSlider.genererImages()