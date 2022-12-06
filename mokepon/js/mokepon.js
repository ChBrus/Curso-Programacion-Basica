function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
    let mascotas = document.getElementsByName('mascota');
    let contador = 0;

    // Así no está en el curso, esto sé me ocurrió a mi XD
    mascotas.forEach(element => {
        if(element.checked) {
            alert('Seleccionaste a ' + element.id);
        } else {
            contador++;
        }
    });
    if (contador == 3) {
        alert('No has seleccionado ningún mokepon');
    }
}

window.addEventListener('load', iniciarJuego);