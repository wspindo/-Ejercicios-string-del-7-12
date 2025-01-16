"use strict";

// Array de números
let nums = [5, 10, 7, 15, 12];

// Función para encontrar el número mayor
function encontrarMayor(array) {
    if (array.length === 0) {
        return null; // Manejo de caso de array vacío
    }
    let mayor = array[0]; // Inicializamos el mayor con el primer elemento
    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i]; // Actualizamos si encontramos un número mayor
        }
    }
    return mayor;
}

// Llamar a la función y mostrar el resultado en una alerta
let numeroMayor = encontrarMayor(nums);
alert(`El número mayor en el array es: ${numeroMayor}`);
