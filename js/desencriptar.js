//se trae el boton de desencriptar
var desencriptar = document.querySelector('#desencriptarb');

desencriptar.addEventListener('click', function (e) {
    
    //inhabilitando el comportamiendo por default de la ancla
    e.preventDefault();

    var bandera = false;

    var campodesencriptado = document.querySelector('#areadesencriptar');
    
    if(campodesencriptado.style.display == "none"){
       alert("es necesario que encriptes un texto para poder desencriptarlo");
    }else{
        console.log(campodesencriptado.style.display);
        campodesencriptado.value = encriptartexto(campodesencriptado.value,bandera);
    }

});