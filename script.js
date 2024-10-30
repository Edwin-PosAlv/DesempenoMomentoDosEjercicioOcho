const usuario = 'admin';
const contrasena = '1234';
let intentos = 0;
const maxIntentos = 3;

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === usuario && password === contrasena) {
        alert('Inicio de sesión exitoso');
        mostrarMenu();
    } else {
        intentos++;
        if (intentos >= maxIntentos) {
            alert('Has excedido el número de intentos permitidos.');
            //
            document.getElementById('username').disabled = true;
            document.getElementById('password').disabled = true;
            document.querySelector('button[type="submit"]').disabled = true;
        } else {
            alert('Nombre de usuario o contraseña incorrectos. Intento ' + intentos + ' de ' + maxIntentos);
        }
    }
});

function mostrarMenu() {
    let opcion;
    do {
        opcion = prompt("Menú:\n1. Opción 1\n2. Opción 2\n3. Salir\nElige una opción:");
        switch(opcion) {
            case '1':
                alert("Has elegido la Opción 1");
                break;
            case '2':
                alert("Has elegido la Opción 2");
                break;
            case '3':
                alert("Saliendo...");
                break;
            default:
                alert("Opción no válida. Por favor, intenta de nuevo.");
        }
    } while(opcion !== '3');
}

function calcularSalario(horasTrabajadas) {
    let salario = 0;

    if (horasTrabajadas <= 40) {
        salario = horasTrabajadas * 20000;
    } else if (horasTrabajadas <= 50) {
        salario = (40 * 20000) + ((horasTrabajadas - 40) * 25000);
    } else {
        salario = (40 * 20000) + (10 * 25000) + ((horasTrabajadas - 50) * 30000);
    }

    return salario;
}

let continuar = true;

while (continuar) {
    let horas = parseInt(prompt("Ingrese las horas trabajadas por el empleado:"));
    let salario = calcularSalario(horas);
    alert(`El salario del empleado es: $${salario}`);

    let respuesta = prompt("¿Desea calcular el salario de otro empleado? (sí/no)");
    continuar = respuesta.toLowerCase() === 'sí';
}
