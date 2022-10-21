const emaiInput = document.querySelector("#email");

function validarEmail(){
    let emailValido = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;;

    if (emailValido.test(emaiInput.value) === true){
        emaiInput.classList.remove("is-invalid");
        emaiInput.classList.add("is-valid");
    }else {
        emaiInput.classList.remove("is-valid");
        emaiInput.classList.add("is-invalid");
    }
}

function validarSenha(){
    if(senha.value.length < 6){
        senha.classList.remove("is-valid");
        senha.classList.add("is-invalid");
    } else {
        senha.classList.remove("is-invalid");
        senha.classList.add("is-valid");
    }
}