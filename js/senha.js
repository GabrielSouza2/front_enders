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