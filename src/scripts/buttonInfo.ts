/* Elementos del DOM */
const indexButton = document.getElementById('infoButton') as HTMLButtonElement;
const historyParagraph = document.getElementById('historyParagraph') as HTMLButtonElement;

/* Funciones */
function showInfo() {
    const historyClassName= historyParagraph.className;
    if (historyClassName.includes('displayBlock')) {
        historyParagraph.className = 'displayNone';
        indexButton.className = 'buttonNotSelected';
    } else {
        historyParagraph.className = 'displayBlock';
        indexButton.className = 'buttonSelected';
    }
}

/* Event listeners */
indexButton.addEventListener('click', showInfo);
