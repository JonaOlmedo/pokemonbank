function mostrar(){
    swal({
        title: "Inicio de sesión: ",
        text: "Exitoso!",
        icon: 'success'
        }).then(function() {
        window.location = "pages/acciones.html";
        });
  
}

function mostrar1(){
    swal ( "¡Transacción! " , "¡Exitosa! " , "success" );
  
}