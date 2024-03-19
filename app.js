
function encriptar(){

    let texto = document.getElementById("textoEncriptado").value;

    if(texto.trim()===""){

        alert("No hay texto para encriptar, por favor escribe un texto!!!");

    }else{

        let txEncriptado = texto.replace(/e/img, "enter")
        .replace(/i/img, "imes")
        .replace(/a/img, "ai")
        .replace(/o/img, "ober")
        .replace(/u/img, "ufat");

        document.getElementById("mensajeDesencriptado").innerHTML = txEncriptado;
        document.getElementById("copiar").style.display = "show";
        document.getElementById("copiar").style.display = "inherit";

    }


}

function desencriptar(){

    let texto = document.getElementById("textoEncriptado").value;

    if(texto.trim()===""){

        alert("No hay texto para encriptar, por favor escribe un texto!!!");

    }else{

        let txEncriptado = texto.replace(/enter/img, "e")
        .replace(/imes/img, "i")
        .replace(/ai/img, "a")
        .replace(/ober/img, "o")
        .replace(/ufat/img, "u");

        document.getElementById("mensajeDesencriptado").innerHTML = txEncriptado;
        document.getElementById("copiar").style.display = "show";
        document.getElementById("copiar").style.display = "inherit";
    
    }

}

function copiar(){

    let contenido = document.querySelector("#mensajeDesencriptado")
    contenido.select();
    document.execCommand("copy");

}