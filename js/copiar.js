//se trae el boton de copiar
var copiar = document.querySelector('#copiarb');

//se captura el evento click
copiar.addEventListener('click', function(e) { 

    //se inhabilita el comportamiendo por default de la ancla
    e.preventDefault();

    //obteniendo el campo donde se ponen los mensajes encriptados/desencriptados
    var campodesencriptado = document.querySelector('#areadesencriptar');
    
    //si el campo sigue invisible se le notifica al usuario 
    if(campodesencriptado.style.display == "none"){

       alert("es necesario que encriptes un texto para poder copiarlo");

    }else{

        //se obtiene el texto dentro del texarea
        var content = campodesencriptado.value;

        //se llama a la API de clipboard ( guardada en el objeto navigator)
        // y se ejecuta una promesa, si resulta correcta la llamada pasa a then, sino a catch
        navigator.clipboard.writeText(content)
            .then(() => {
                //se cambia el texto del boton 
                copiar.textContent="✔ Copiado en el portapapeles";

                //se esperan 2 segundos y se devuelve al texto por default
                setTimeout(function(){
                    copiar.textContent="Copiar";
                },2000); 
                       
        })
            .catch(err => {
            console.log('Something went wrong', err);
        });

    }

});