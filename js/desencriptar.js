//se trae el boton de desencriptar
var desencriptar = document.querySelector('#desencriptarb');

//captura el evento click 
desencriptar.addEventListener('click', function (e) {
    
    //inhabilitando el comportamiendo por default de la ancla
    e.preventDefault();

    //declara la bandera en false para que la funcion que encripta, desencripte
    var bandera = false;

    //traemos el campo donde va el mensaje desencriptado
    var campodesencriptado = document.querySelector('#areadesencriptar');
    
    //si el campo aun sigue invisible, se le manda la alerta al usuario
    if(campodesencriptado.style.display == "none"){
       alert("es necesario que encriptes un texto para poder desencriptarlo");
    }else{
        //de lo contrario pasa a desencriptar el texto que este contenga 
        campodesencriptado.value = encriptartexto(campodesencriptado.value,bandera);
    }

});