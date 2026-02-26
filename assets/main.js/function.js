//creiamo le variabili
const overlay = document.getElementById("overlay");
const imgOverlay = document.getElementById("img-overlay");

function mostraOverlay(url) {
    //qui gli diciamo che quando l'immagine va in overlay sara uguale all'url dell'immagine
    imgOverlay.src=url;
    //qui andiamo a prendere direttamente nel css il display e gli diciamo di cambiare
    overlay.style.display = 'flex';
    console.log("L'overlay è stato aperto")
}


function chiudiOverlay() {
    //qui andiamo a prendere direttamente nel css il display e gli diciamo di cambiare
    overlay.style.display = 'none';
    console.log("L'overlay è stato chiuso");
}