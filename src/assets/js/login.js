$(document).ready (function(){

$("#signin").click(function(){
    let email = $("email").val();
    let senha = $("senha").val();

    console.log( validarLogin (email, senha) );
    
    if ( validarLogin(email, senha) ) {
        alert("preenchido corretamente")
    }else {
        alert ("preencher todos os campos")
    }
} )

function validarLogin(e, s) {
    if(e !== "" && s != ""){
        return true;
    }else {
        return false;
    }
}
});
