//se trae el boton de encriptar
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
        campodesencriptado.value = encriptartexto(texto,bandera);

          //obtenemos la imagen y la hacemos invisible
        document.querySelector('#bannerNoEncriptado').style.display = 'none';

        //hacemos visible el texarea del texto encriptado
        campodesencriptado.style.display = 'block';
    }

  

});


function encriptartexto(texto,bandera) {

    if(texto!=""){

        var textoaux = texto;

        //separando el texto caracter por caracter
        texto = texto.split('');

        //llaves de encriptacion
        var keys = ['a', 'e', 'i', 'o', 'u'];

        // valores de las llaves 
        var values = ['ai','enter','imes','ober','ufat'];

        //almacena los cambios para las letras
        var transform="";

        //almacenara el mensaje final
        var textoencriptado="";

        //se recorre letra por letra 
        texto.forEach(function(letra,indice) {
            console.log(letra);

            //se pregunta si la letra se encuentra en el array de llaves 
            if(encontrarindice(letra,keys)!= -1) {

                //se pregunta el modo de encriptacion true=encriptar , false=desencriptar
                if(bandera){
                    //asigna el endice de la kye a su respectivo valor y transforma la letra actual 
                    transform = values[encontrarindice(letra,keys)];
                    console.log(transform);
                     //se cambia en el arreglo principal la vocal transformada
                    texto[indice]=transform;
                   
                }else{
                    if(bandera==false){
                       var tam = values[encontrarindice(letra,keys)];
                       textoaux=textoaux.replace(tam,keys[encontrarindice(letra,keys)]);
                    }
                    
                }
                
               
                
            }

             //se almacenan los cambios
             textoencriptado+=texto[indice];
            
    });

    }else{
        //mensaje de error si el usuario activa el boton sin haber escrito nada
        alert("por favor, ingresa texto en el campo para porder encriptarlo");
        return null;
    }
    
   if(bandera==false){
    textoencriptado=textoaux;
   }
    //retorno del texto encriptado
    return textoencriptado;
}

//devuelve la posicion de la vocal en el array de keys si bandera = true
function encontrarindice(texto,keys) {
    const indicevocal = (element) => element == texto;
    return keys.findIndex(indicevocal);
}
