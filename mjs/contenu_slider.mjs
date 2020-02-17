/**
 * class qui génère le contenu du slider de la page à partir d'un fichier .json
 */
export class creation_slider{
    constructor(elmSlides,contenuSlider){
        this.elmSlides = elmSlides;
        this.contenuSlider = contenuSlider;
    }

    /**
     * génère les images dans le slider
     */
    genererImages(){
        console.log('début génération');
        console.log(this.contenuSlider.images[0].lien);
        const slides = this.elmSlides;

        for(let i=0; i<slides.length; i++){
            slides[i].style.backgroundImage = "url("+this.contenuSlider.images[i].lien+")";
            console.log(this.contenuSlider.images[i].lien);
        }
    }
}