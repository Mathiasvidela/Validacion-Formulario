
const submitFunction = (event) => {
   if(!validarForm()){
    event.preventDefault(); // previene la actualizacion de la web
   } else{
    event.preventDefault();
    alert(
        'Los datos enviados fueron' + '\n' +
        'Nombre: ' + document.getElementById('nombre').value + '\n' +
        'Apellido: ' + document.getElementById('apellido').value + '\n' +
        'Documento: ' + document.getElementById('documento').value + '\n' +
        'Email: ' + document.getElementById('email').value + '\n' +
        'Edad: ' + document.getElementById('edad').value + '\n' +
        'Actividad: ' + document.getElementById('actividad').value + '\n' +
        'Estudios: ' + document.getElementById('estudios').value + '\n'






    )


   }
}


document.getElementById('formulario').addEventListener('submit', submitFunction); //Escucha el envio del formulario

function validarForm(){

    //Esto valdia los campos de texto

    const camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    camposTexto.forEach(campo =>{

        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)) // error + id con la primera en mayus
        if(campo.value.length == ''){
            mostrarError(errorCampo, 'Este campo es requerido!');
            validacionCorrecta = false;
        }else if(campo.value.length > 0 && campo.value.length < 3){
            mostrarError(errorCampo, 'Este campo debe tener al menos 3 caracteres!');
            validacionCorrecta = false;
        }else{
            ocultarError(errorCampo);
        }

    });

    //validacion de email

    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail'); 

    if( /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email.value)){ //este regex valida que el formato del mail sea valido
        ocultarError(errorEmail);
    }else{
        mostrarError(errorEmail,'Ingrese un Email valido');
    }

    //validacion de edad

    const edad = document.getElementById('edad');
    const errorEdad = document.getElementById('errorEdad');

    if (edad.value < 18){
        mostrarError(errorEdad, 'Debes ser mayor de 18 años');
        validacionCorrecta = false;
    } else{
        ocultarError(errorEdad);
    }

    // validacion de la actividad

    const actividad = document.getElementById('actividad');
    const errorActividad = document.getElementById('errorActividad');

    if(actividad.value == ''){
        mostrarError(errorActividad, 'Por favor, seleccione una actividad');
        validacionCorrecta = false;
    } else{
        ocultarError(errorActividad);
    }

    // validacion nivel de estudios

    const estudios = document.getElementById('estudios');
    const errorEstudios = document.getElementById('errorEstudios');

    if(estudios.value == ''){
        mostrarError(errorEstudios, 'Por favor, seleccione un nivel de estudio');
        validacionCorrecta = false;
    } else{
        ocultarError(errorEstudios);
    }

    // validacion terminos y condiciones
    
    const aceptoTerminos = document.getElementById('aceptoTerminos');
    const errorTerminos = document.getElementById('errorTerminos');

    if(!aceptoTerminos.checked){
        mostrarError(errorTerminos,'Debes aceptar los temrinos y condiciones!');
        validacionCorrecta = false;
    } else{
        ocultarError(errorTerminos);
    }

    return validacionCorrecta; // esto nos dira si el formulario esta completo o no

}

const mostrarError = (elemento,mensaje) =>{
    elemento.textContent = mensaje;
    elemento.style.display = 'block';
}

const ocultarError = (elemento) =>{
    elemento.textContent = '';
    elemento.style.display = 'none';
}