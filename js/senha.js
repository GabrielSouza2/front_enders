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

function redirecionar() {
    let redirecionarBtn = document.querySelectorAll("#email");
    redirecionarBtn = Array.from(redirecionarBtn);
  
    let valido = redirecionarBtn.every((item) =>
      item.classList.contains("is-valid")
    );
  
    const aviso = document.querySelector('h6');
  
    if (valido) {
      aviso.style.color = 'green';
      aviso.textContent = 'E-mail enviado!';
    } else {
      aviso.textContent = 'E-mail inválido';
      aviso.style.color = 'red';
    }
  }
  const botao = document.querySelector("#recuperar");
  
  botao.addEventListener("click", function (event) {
    event.preventDefault();
    

    validarEmail();
    redirecionar();
});