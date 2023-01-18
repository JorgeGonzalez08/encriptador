const texto = document.getElementById('text');
const imagen = document.getElementById('imagen');
const resultado = document.getElementById('resultado');
const error = document.getElementById('error');
const pegarTexto = document.getElementById('pegar');
const limpiarT = document.getElementById('limpiar');
const acentos = /[ÁÉÍÓÚÜÑáéíóúüñ]/;

const encriptacion = texto => {
    return texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")
}

const desencriptacion = texto => {
    return texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u")
}

let  textoFinal = '';

function verAcentos( texto ) {
    let resultado = acentos.test( texto )
    if ( resultado != false ) {
        error.classList.add( "error" ); 
    } else {
        error.classList.remove( "error" );
    }
    return  resultado;
}

function encriptar() {
    textoFinal = '';
    let textoInicial = texto.value.toLowerCase();
    let acento = verAcentos( textoInicial );
    if ( textoInicial.trim() == '' ) {
        window.location.reload();
    }
    if ( textoInicial != ''  &&  acento != true ) {
        textoFinal = encriptacion( textoInicial );
        imagen.classList.add( "ocultarImagen" );
        resultado.textContent = textoFinal;
        text.value = "";

    }    
}

function desencriptar() {
    textoFinal = '';
    let textoInicial = texto.value.toLowerCase();
    let acento = verAcentos( textoInicial );
    if ( textoInicial.trim() == '' ) {
        window.location.reload();
    }
    if ( textoInicial != ''  &&  acento != true ) {
        textoFinal = desencriptacion( textoInicial );
        imagen.classList.add( "ocultarImagen" );
        resultado.textContent = textoFinal;
        text.value = "";

    }    
}

let copiarT;

function aparecer() {
    copiarT = document.getElementById('text');
    pegarTexto.style.zIndex = '0';
    imagen.classList.remove('ocultarImagen');

}

function limpiarTexto() {
    window.location.reload();

}

function pegar() {
    copiarT.value = document.getElementById('resultado').innerHTML;
    pegarTexto.style.zIndex='-1';
}