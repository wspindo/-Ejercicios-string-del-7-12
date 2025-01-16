"use strict"

// Función para contar cuántas palabras tiene una frase
function countWordsInPhrase(phrase) {
    // Dividir la frase por espacios y contar las partes
    const words = phrase.trim().split(/\s+/); // trim elimina espacios extra al inicio y final, split separa por espacios
    return words.length;
}

// Esperar a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    // Frase de ejemplo
    const phrase = "vida es una sola";

    // Lógica y resultado
    const wordCount = countWordsInPhrase(phrase);

    // Mostrar resultado con alert
    alert(`La frase '${phrase}' tiene ${wordCount} palabras.`);
});
