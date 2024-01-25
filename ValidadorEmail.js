function validateEmail(){
                
                // Datos de entrada
                var emailField = document.getElementById('email');
                
                // Expresiones regulares
                var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

                //Textos de Validadacion 
                if( validEmail.test(emailField.value) ){
                    alert('Email es valido, Bienvenido');
                    return true;
                }else{
                    alert('Email es invalido, Email incorrecto');
                    return false;
                }
            }
