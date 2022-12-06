function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
    let mascotas = document.getElementsByName('mascota');
    let nombreMascotaJugador = document.getElementById('mascota-jugador');
    let contador = 0;

    // Así no está en el curso, esto sé me ocurrió a mi XD
    mascotas.forEach(element => {
        if(element.checked) {
            alert('Seleccionaste a ' + capitalizarPrimeraLetra(element.id));
            nombreMascotaJugador.innerHTML = capitalizarPrimeraLetra(element.id);
        } else {
            contador++;
        }
    });
    if (contador == 3) {
        alert('Selecciona una mascota');
    }
}

/** 
 * Descripción: Retorna el texto introducido como parámetro pero con la primera letra en mayúscula
 * @param string Texto a cambiar la primera letra a mayúscula
*/
function capitalizarPrimeraLetra(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

window.addEventListener('load', iniciarJuego);