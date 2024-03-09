/* Images du Carrousel */
const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
/*  */

/* Gestions du Carrousel 
 	- Changement d'image
 	- Changement de texte
	- Changement des dots
    - Changement d'image au clic sur la flèche gauche
    - Changement d'image au clic sur la flèche droite
*/
document.addEventListener('DOMContentLoaded', (event) => {

	let slideActive = 0;
    let slideMax = slides.length - 1;

    const arrowLeft = document.querySelector('.arrow_left');
    const arrowRight = document.querySelector('.arrow_right');
    const image = document.querySelector('.banner-img');
    const text = document.querySelector('#banner p');
    const dots = Array.from(document.querySelectorAll('.dot'));

    function slideUpdate() {
        /* Gestion de la src de l'image en fonction de la slideActive */
        image.src = slides[slideActive].image;
        /* Gestion du chengement du texte en fonction de la slideActive */
        text.innerHTML = slides[slideActive].tagLine;
        /* Changement des dots_selected en fonction de la slideActive */
        dots.forEach(dot => dot.classList.remove('dot_selected'));
        dots[slideActive].classList.add('dot_selected');
    }

    /* Changement d'image au clic sur la flèche gauche */
    arrowLeft.addEventListener('click', (event) => {
        slideActive = (slideActive > 0) ? slideActive - 1 : slideMax;
        console.log('Fleche Gauche ' + slideActive);
        slideUpdate();
    });

    /* Changement d'image au clic sur la flèche droite */
    arrowRight.addEventListener('click', (event) => {
        slideActive = (slideActive < slideMax) ? slideActive + 1 : 0;
        console.log('Fleche Droit ' + slideActive);
        slideUpdate();
    });

    slideUpdate();
});
/*  */
