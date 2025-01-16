"use strict"
// Función para contar cuántas veces se repite una letra en una palabra
function countLetterOccurrences(text, letter) {
    let count = 0;
    for (let char of text) {
        if (char === letter) {
            count++;
        }
    }
    return count;
}

// Esperar a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    // Datos de ejemplo
    const text = "sudamericano";
    const letter = "a";

    // Lógica y resultado
    const repetitions = countLetterOccurrences(text, letter);

    // Mostrar resultado con alert
    alert(`La letra '${letter}' se repite ${repetitions} veces en '${text}'.`);
});
