//se trae el boton de desencriptar
var desencriptar = document.querySelector('#desencriptarb');

desencriptar.addEventListener('click', function (e) {
    
    //inhabilitando el comportamiendo por default de la ancla
    e.preventDefault();

    var bandera = false;

    var campodesencriptado = document.querySelector('#areadesencriptar');
    
    if(campodesencriptado.value != ""){
        campodesencriptado.value = encriptartexto(campodesencriptado.value,bandera);
    }else{
        alert("es necesario que encriptes un texto para poder desencriptarlo");
    }

});