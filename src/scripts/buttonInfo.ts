/* Elementos del DOM */
const indexButton = document.getElementById('infoButton') as HTMLButtonElement;
const historyParagraph = document.getElementById('historyParagraph') as HTMLButtonElement;

/* Funciones */
function showInfo() {
    const historyClassName= historyParagraph.className;
    if (historyClassName.includes('visible')) {
        historyParagraph.className = 'hidden';
        indexButton.className = 'buttonNotSelected';
    } else {
        historyParagraph.className = 'visible';
        indexButton.className = 'buttonSelected';
    }
}

/* Event listeners */
indexButton.addEventListener('click', showInfo);
