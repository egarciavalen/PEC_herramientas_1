/* Elementos del DOM */
const videoButton = document.getElementsByClassName('showVideoButton')[0] as HTMLDivElement;
const videoDet = document.getElementsByClassName('videoDet')[0] as HTMLButtonElement;

/* Funciones */
function showVideo() {
    if (videoButton.innerText === 'Mostrar vídeo') {
        videoDet.className = videoDet.className.replace('none', '');
        videoButton.innerText = 'Ocultar vídeo';
    } else if (videoButton.innerText === 'Ocultar vídeo') {
        videoDet.className += " none";
        videoButton.innerText = 'Mostrar vídeo';
    }
}

/* Event listeners */
videoButton.addEventListener('click', showVideo);
