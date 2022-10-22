const emaiInput = document.querySelector("#email");
const senha = document.querySelector("#senha");

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

function redirecionar() {
    let redirecionarBtn = document.querySelectorAll("#email, #senha");
    redirecionarBtn = Array.from(redirecionarBtn);
  
    let valido = redirecionarBtn.every((item) =>
      item.classList.contains("is-valid")
    );
  
    const aviso = document.querySelector('h6');
  
    if (valido) {
      aviso.style.color = 'green';
      aviso.textContent = 'Login efetuado!';
    } else {
      aviso.textContent = 'Preencha todos os campos corretamente!';
      aviso.style.color = 'red';
    }
  }
  const botao = document.querySelector(".login");
  
  botao.addEventListener("click", function (event) {
    event.preventDefault();
    

    validarEmail();
    validarSenha();
    redirecionar();
});