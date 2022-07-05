var encriptar = document.querySelector('#encriptarb');

//captando click en el boton encriptar
encriptar.addEventListener('click', function (e) {
    
    // esta variable cambia el modo del metodo encriptar para que encripte o desencripte el texto
    var bandera=true;

    //inhabilitar el comportamiendo por default de las anclas
    e.preventDefault();

    //obteniendo texto del tex area
    var texto =document.querySelector('#mensajencriptar').value;

    //obtenermos el texarea donde se pondra el texto encriptado
    var campodesencriptado = document.querySelector('#areadesencriptar');

   
    //si el usuario no ingreso ningun texto, se acaba el metodo 
    if(encriptartexto(texto,bandera)==null){

        return;

    }else{

         //le asignamos el texto ya encriptado
        campodesencriptado.textContent = encriptartexto(texto,bandera);

          //obtenemos la imagen y la hacemos invisible
        document.querySelector('#bannerNoEncriptado').style.display = 'none';

        //hacemos visible el texarea del texto encriptado
        campodesencriptado.style.display = 'block';
    }

  

});


function encriptartexto(texto,bandera) {

    if(texto!=""){
        //separando el texto caracter por caracter
        texto = texto.split('');

        //llaves de encriptacion
        var keys = ['a', 'e', 'i', 'o', 'u'];

        // valores de las llaves 
        var values = ['ai','enter','imes','ober','ufat'];

        //almacenara el mensaje final
        var textoencriptado="";
        texto.forEach(function(letra,indice) {
        
            if(encontrarindice(letra,keys)!= -1) {
               
                if(bandera){
                    var transform = values[encontrarindice(letra,keys)];
                }else{

                }
                
                texto[indice]=transform;
            }
        
            textoencriptado+=texto[indice];
    });

    }else{
        alert("por favor, ingresa texto en el campo para porder encriptarlo");
        return null;
    }

    return textoencriptado;
}

//devuelve la posicion de la vocal en el array de keys
function encontrarindice(texto,keys) {
    const indicevocal = (element) => element == texto;
    return keys.findIndex(indicevocal);
}