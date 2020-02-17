/**
 * class qui génère le contenu du slider de la page à partir d'un fichier .json
 */
export class contenu_slider{
    constructor(elmSlides,images){
        this.elmSlides = elmSlides;
        this.images = images;
    }

    /**
     * génère les images dans le slider
     */
    genererImages(){
        console.log('début génération');
        console.log(this.imagesJson);
        const slides = this.elmSlides;

        for(let i=0; i<slides.length; i++){
            slides[i].style.backgroundImage = "";
            console.log(i+1);
        }
    }
}