var encriptar = document.querySelector('#encriptarb');

//captando click en el boton encriptar
encriptar.addEventListener('click', function (e) {

    //inhabilitar el comportamiendo por default de las anclas
    e.preventDefault();

    //obteniendo texto del tex area
    var texto =document.querySelector('#mensajencriptar').value;

    //separando el texto caracter por caracter
    texto = texto.split('');

    //llaves de encriptacion
    var keys = ['a', 'e', 'i', 'o', 'u'];

    // valores de las llaves 
    var values = ['ai','enter','imes','ober','ufat'];

    texto.forEach(function(letra,indice) {
        
        if(encontrarindice(letra,keys)!= -1) {
            var transform = values[encontrarindice(letra,keys)];
            texto[indice]=transform;
        }
        
    });

    
    
});

//devuelve la posicion de la vocal en el array de keys
function encontrarindice(texto,keys) {
    const indicevocal = (element) => element == texto;
    return keys.findIndex(indicevocal);
}