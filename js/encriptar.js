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

        //se recorre letra por letra 
        texto.forEach(function(letra,indice) {
            
            //se pregunta si la letra se encuentra en el array de llaves 
            if(encontrarindice(letra,keys)!= -1) {
               
                //se pregunta el modo de encriptacion true=encriptar , false=desencriptar
                if(bandera){
                    //asigna el endice de la kye a su respectivo valor y transforma la letra actual 
                    var transform = values[encontrarindice(letra,keys)];
                }else{

                }
                
                //se cambia en el arreglo principal la vocal transformada
                texto[indice]=transform;
            }

            //se almacena el texto con o sin cambios
            textoencriptado+=texto[indice];
    });

    }else{
        //mensaje de error si el usuario activa el boton sin haber escrito nada
        alert("por favor, ingresa texto en el campo para porder encriptarlo");
        return null;
    }

    //retorno del texto encriptado
    return textoencriptado;
}

//devuelve la posicion de la vocal en el array de keys
function encontrarindice(texto,keys) {
    const indicevocal = (element) => element == texto;
    return keys.findIndex(indicevocal);
}