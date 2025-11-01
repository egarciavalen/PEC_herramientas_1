/* Elementos del DOM */
const imagesButton = document.getElementsByClassName('showImagesButton')[0] as HTMLDivElement;
const imagesDet = document.getElementsByClassName('imagesDet')[0] as HTMLButtonElement;

/* Funciones */
function showImages() {
    if (imagesButton.innerText === 'Mostrar imágenes') {
        imagesDet.className = imagesDet.className.replace('none', '');
        imagesButton.innerText = 'Ocultar imágenes';
    } else if (imagesButton.innerText === 'Ocultar imágenes') {
        imagesDet.className += " none";
        imagesButton.innerText = 'Mostrar imágenes';
    }
}

/* Event listeners */
imagesButton.addEventListener('click', showImages);
