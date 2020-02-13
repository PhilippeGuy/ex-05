import {anim_entete} from "./anim_entete.mjs";

let elmEntete = document.querySelectorAll("header .global>*");

const animEntete = new anim_entete(elmEntete);
animEntete.anim();