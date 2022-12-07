let ataqueJugador;

window.addEventListener('load', iniciarJuego);

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click', ataqueFuego);
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click', ataqueAgua);
    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.addEventListener('click', ataqueTierra);
}

function seleccionarMascotaJugador() {
    let mascotas = document.getElementsByName('mascota');
    let nombreMascotaJugador = document.getElementById('mascota-jugador');
    let contador = 0;

    // Así no está en el curso, esto sé me ocurrió a mi XD
    mascotas.forEach(element => {
        if(element.checked) {
            //alert('Seleccionaste a ' + capitalizarPrimeraLetra(element.id));
            nombreMascotaJugador.innerHTML = capitalizarPrimeraLetra(element.id);
        } else {
            contador++;
        }
    });
    if (contador == 3) {
        alert('Selecciona una mascota');
        return;
    }

    seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
    let mascotaEnemigo = document.getElementById('mascota-enemigo');
    let mascotaEnemigoAleatorio = aleatorio(1, 3);

    switch (mascotaEnemigoAleatorio) {
        case 1:
            mascotaEnemigo.innerHTML = 'Hipodoge';
        break;
        case 2:
            mascotaEnemigo.innerHTML = 'Capipepo';
        break
        case 3:
            mascotaEnemigo.innerHTML = 'Ratigueya';
        break;
    }
}

function ataqueFuego() {
    ataqueJugador =  'Fuego';
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/** 
 * Descripción: Retorna el texto introducido como parámetro pero con la primera letra en mayúscula
 * @param string Texto a cambiar la primera letra a mayúscula
*/
function capitalizarPrimeraLetra(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}