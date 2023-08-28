// Dia y Noche

const btnDiaNoche = document.querySelector('.contenedorBtn')
const body= document.body


btnDiaNoche.addEventListener('click',() =>{
    body.classList.toggle('modoNoche')
})

// Carrusel Home

const arrowLeft = document.querySelector('.fa-arrow-left'); // obtener el selector de la flecha izquierda
const arrowRight = document.querySelector('.fa-arrow-right'); // obtener el selector de la flecha derecha
const wrapper = document.querySelector('.wrapper'); // obtener el wrapper que contiene las imagenes del carrusel

let indiceActual = 0;

arrowLeft.addEventListener('click', () => {
    indiceActual = (indiceActual - 1 + 3) % 3;
    actualizarCarrusel();
});

arrowRight.addEventListener('click', () => {
    indiceActual = (indiceActual + 1) % 3;
    actualizarCarrusel();
});

function actualizarCarrusel() {
    const borde = -indiceActual * 100;
    wrapper.style.transform = `translateX(${borde}%)`;
}

//Contador de promocion
// se obtiene el contenedor y los elementos de dia, hora, minutos,segundos
const contador = document.getElementById("contador")
const dias = document.getElementById("dias")
const horas = document.getElementById("horas")
const minutos = document.getElementById("minutos")
const segundos = document.getElementById("segundos")

const fechaLimite = new Date(2023,9,1,23,59,59) // se define una fecha limite 

// funcion para actualizar elcontador
function actualizarContador(){
    const ahora = new Date().getTime() // se obtiene la hora al momento en milisegundos
    const tiempoRestante = fechaLimite - ahora // tiempo restante entre ahora y fecha limite en milisegundos
    
    // 1000 representa 1000 milisegundos en un segundo.
    // 60 representa 60 segundos en un minuto.
    // 60 representa 60 minutos en una hora.
    // 24 representa 24 horas en un día.

    const diasRestantes = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24)) 
    const horasRestante = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutosRestante = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60))
    const segundosRestante = Math.floor((tiempoRestante % (1000 * 60)) / 1000)

    dias.textContent = `${formatearHora(diasRestantes)} dias`;
    horas.textContent = `${formatearHora(horasRestante)} horas`;
    minutos.textContent = `${formatearHora(minutosRestante)} minutos`;
    segundos.textContent = `${formatearHora(segundosRestante)} segundos`;

    function formatearHora(tiempo){
        return tiempo < 10 ? `0${tiempo}` : tiempo
    }
}
actualizarContador()
setInterval(actualizarContador, 1000)


// animacion de las terapias de tratamientos
const cuadroTerapias = document.querySelectorAll('.cuadroTerapia') // se selecciona todos los cuadros delas terapias
// creacion de la funcion para la animacion de los cuadros
function animacionCuadroTerapias(){
    cuadroTerapias.forEach(cuadroTerapia =>{
        const elementoTop = cuadroTerapia.getBoundingClientRect().top // la funcion sirve para saber la distancia entre el borde superior del elemento y el borde superior de la ventana
        const windowHeight = window.innerHeight // se utiliza para obtener la altura de la ventana gráfica del navegador en ese momento

        if (elementoTop < windowHeight){
            cuadroTerapia.classList.add('aparecer')
        }
    })
}
window.addEventListener('scroll',animacionCuadroTerapias)
window.addEventListener('load',animacionCuadroTerapias)

// Mover el hover de las opciones de la barra de navegacion
let seccion = document.querySelectorAll('section') //lista de todas las secciones que hay
let linkNav = document.querySelectorAll('header .nav a') //lista de todas las 'a' que hay en el header .nav

// cuando se hace scroll en la pagina empezara a ejecutar esta funcion la cual hace que las opciones de la barra de navegacion se activen cuando entren a su  seccion
window.onscroll = () =>{

    seccion.forEach(sec => {

        let principio = window.scrollY; //top de la pagina
        let altura = sec.offsetHeight; // altura de la seccion
        let borde = sec.offsetTop - 150; //comienzo de la seccion
        let id =sec.getAttribute('id'); //ID de la seccion

        if(principio >= borde && principio < borde + altura){
            linkNav.forEach(links =>{
                links.classList.remove('active') // remueve la clase active
                document.querySelector('header .nav a[href*='+id+']').classList.add('active') // Busca el enlace a con el atributo href contenga el ID y le agrega la clase active
            })
        }
    })
}
// remover la clase active cuando se presione el boton se desplazar del final de la pagina hasta el principio
function removerLink(){
    linkNav.forEach(links =>{
        links.classList.remove('active')
    })
}

//funcion que retira despues de N segundos la seccion de cargando
function esconder() {  
    document.querySelector('.cargaContenedor').classList.add('esconder') // se agrega la clase 'esconder' para que mueva el cargando  
}
//funcion que se ejecuta al abrir la pagina que pide que ingrese tu nombre y tiene un callBack de setInterval que permite llamar otra funcion y en cuantos segundos la llamara
function accionar(){
    setInterval(esconder, 2000)
}
window.onload = accionar;


// obtener datos de los formularios y mostrarlos por consola

document.getElementById('enviarContacto').addEventListener('click',(event) =>{
    const nombre = document.getElementById('nombre').value
    const asunto =document.getElementById('asunto').value
    const email =document.getElementById('emaill').value
    const mensaje =document.getElementById('mensaje').value

    const formDatos = {
        nombre : nombre,
        asunto:asunto,
        email:email,
        mensaje:mensaje
    }
    console.log(formDatos);
})
