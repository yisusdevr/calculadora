function sumar() {
    // Obtiene los valores de los campos de entrada
    let num1 = parseFloat(document.getElementById("num1").value); 
    let num2 = parseFloat(document.getElementById("num2").value);
    // Verifica que los campos no estén vacíos
    if (isNaN(num1) || isNaN(num2)) { 
        alert("Por favor, ingresa números válidos en ambos campos."); 
        return;
    }

    // Realiza la suma
    let suma = num1 + num2;

    // Muestra el resultado en la página con animación
    let resultadoElement = document.getElementById("resultado"); 
    resultadoElement.innerHTML = "La suma es:  " + suma;
    resultadoElement.classList.add("mostrar");
    // Cambia el color de la alerta según el resultado
    if (suma > 10) {
    resultadoElement.className = "alert alert-success mostrar";
    } else {
    resultadoElement.className = "alert alert-danger mostrar";
    }
    }
    // Agrega un evento click al botón de calcular
    document.getElementById("calcularBtn").addEventListener("click", sumar);