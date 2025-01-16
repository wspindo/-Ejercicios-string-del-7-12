"use strict";
// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Array de ejemplo
    let nums = [2, 3, 2, 3, 5];

    // Obtener el div donde se mostrarán los resultados
    let resultDiv = document.getElementById('result');

    // Función para imprimir índices en orden ascendente y descendente
    function imprimirIndices(array) {
        let ascendente = []; // Índices ascendentes
        let descendente = []; // Índices descendentes

        // Generar índices
        for (let i = 0; i < array.length; i++) {
            ascendente.push(i);
            descendente.unshift(i);
        }

        // Mostrar resultados
        for (let i = 0; i < array.length; i++) {
            let linea = `${ascendente[i]}      ${descendente[i]}`;
            let p = document.createElement('p');
            p.textContent = linea;
            resultDiv.appendChild(p);
        }
    }

    // Llamar a la función
    imprimirIndices(nums);
});
