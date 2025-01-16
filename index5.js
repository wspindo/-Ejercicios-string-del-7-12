// Array de enteros
let nums = [3, 2, 4, 1];

// Elemento donde se mostrarán los resultados
let resultDiv = document.getElementById('result');

// Función para calcular la suma máxima de combinaciones
function calcularSumaMaxima(array) {
    let mayor = Number.NEGATIVE_INFINITY; // Inicializamos el mayor como un valor muy pequeño
    let combinaciones = []; // Array para almacenar las combinaciones y sumas

    // Generar todas las combinaciones
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            let suma = array[i] + array[j];
            combinaciones.push(`${array[i]} + ${array[j]} = ${suma}`);
            if (suma > mayor) {
                mayor = suma; // Actualizamos el mayor si encontramos una suma más grande
            }
        }
    }

    // Mostrar combinaciones
    combinaciones.forEach(combinacion => {
        let p = document.createElement('p');
        p.textContent = combinacion;
        resultDiv.appendChild(p);
    });

    // Mostrar el mayor al final
    let resultadoFinal = document.createElement('h2');
    resultadoFinal.textContent = `El mayor es ${mayor}`;
    resultDiv.appendChild(resultadoFinal);
}

// Llamar a la función
calcularSumaMaxima(nums);
