function encriptar(){

    var texto = document.getElementById("textoInicial").value.toLowerCase();
    var cifrado = texto.replace(/e/gm,"enter");
    var cifrado = cifrado.replace(/o/gm,"ober");
    var cifrado = cifrado.replace(/i/gm,"imes");
    var cifrado = cifrado.replace(/a/gm,"ai");
    var cifrado = cifrado.replace(/u/gm,"ufat");

    document.getElementById("img-nino").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").innerHTML = cifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    }

    function desencriptar(){

    var texto = document.getElementById("textoInicial").value.toLowerCase();
    var cifrado = texto.replace(/enter/gm,"e");
    var cifrado = cifrado.replace(/ober/gm,"o");
    var cifrado = cifrado.replace(/imes/gm,"i");
    var cifrado = cifrado.replace(/ai/gm,"a");
    var cifrado = cifrado.replace(/ufat/gm,"u");

    document.getElementById("img-nino").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").innerHTML = cifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    }

    function copiar(){
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("Codigo Copiado con Exito!!!");
    }