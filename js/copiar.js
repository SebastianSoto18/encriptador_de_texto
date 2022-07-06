var copiar = document.querySelector('#copiarb');

copiar.addEventListener('click', function(e) { 

    e.preventDefault();

    var campodesencriptado = document.querySelector('#areadesencriptar');
    
    if(campodesencriptado.style.display == "none"){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'es necesario que encriptes un texto para poder copiarlo',
          })
    }else{

        var content = campodesencriptado.innerHTML;

        navigator.clipboard.writeText(content)
            .then(() => {

                copiar.textContent="✔ Copiado en el portapapeles";
                setTimeout(function(){
                    copiar.textContent="Copiar";
                },2000); 
                       
        })
            .catch(err => {
            console.log('Something went wrong', err);
        });

    }

});