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
