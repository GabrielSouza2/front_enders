const cidade = document.querySelector("#cidade");
const estado = document.querySelector("#estado");
const bairro = document.querySelector("#bairro");
const rua = document.querySelector("#rua");


function getApi(){
    let cep = document.querySelector("#cep").value;
    cep = cep.replace(/\D/g, "");
    if (cep != ""){
        const pedido = new XMLHttpRequest();

        pedido.open("GET", `https://viacep.com.br/ws/${cep}/json`);
        pedido.send();
        pedido.addEventListener("load", function (){
            const resposta = JSON.parse(pedido.responseText);

            const cepApi = resposta.cep;

            if (cepApi != undefined){
                validarCep();
            }else{
                return erroCep();
            }
            cep = cepApi;
            cidade.value = resposta.localidade;
            estado.value = resposta.uf;
            bairro.value = resposta.bairro;
            rua.value = resposta.logradouro;
        });
    }else{
        return erroCep();
    }
}

const input = document.querySelectorAll(".enderecoinput");

function erroCep(){
    for (var i=0; i < input.length; i++){
        limparCep();
        input[i].classList.remove("is-valid");
        input[i].classList.add("is-invalid");
    }
}

function validarCep(){
    for(var i = 0; i < input.length; i++){
        input[i].classList.remove("is-invalid");
        input[i].classList.add("is-valid");
    }
}

function limparCep(){
    cidade.value = "";
    estado.value = "";
    bairro.value = "";
    rua.value = "";
}

//-----VALIDAÇÃO DO NOME----- //


const nomeCompleto = document.querySelector("#nome");

function validarNome(){


    let nomeCompletoValido = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/;

    if (nomeCompletoValido.test(nomeCompleto.value) === true && nomeCompleto.value.length > 10){
        nomeCompleto.classList.remove("is-invalid");
        nomeCompleto.classList.add("is-valid");
    }else{
        nomeCompleto.classList.remove("is-valid");
        nomeCompleto.classList.add("is-invalid");
    }
}
//----- E-MAIL ----- //

const emaiInput = document.querySelector("#email");

function validarEmail(){
    let emailValido = /^\S+@\S+\.\S+$/;

    if (emailValido.test(emaiInput.value) === true){
        emaiInput.classList.remove("is-invalid");
        emaiInput.classList.add("is-valid");
    }else {
        emaiInput.classList.remove("is-valid");
        emaiInput.classList.add("is-invalid");
    }
}
//----- CONFIRMAÇÂO DE SENHA ----- //

const senha = document.querySelector("#senha");
const confirmarSenha = document.querySelector("#confirm");


function validarSenha(){
    if(senha.value.length < 6){
        senha.classList.remove("is-valid");
        senha.classList.add("is-invalid");
    } else {
        senha.classList.remove("is-invalid");
        senha.classList.add("is-valid");
    }
}

function confirmarPassword(){
    if (
        senha.value === confirmarSenha.value && confirmarSenha.value.length != ""
    ){
        confirmarSenha.classList.remove("is-invalid");
        confirmarSenha.classList.add("is-valid");
    } else {
        confirmarSenha.classList.remove("is-valid");
        confirmarSenha.classList.add("is-invalid");
    }
}
 // ----- RG ----- //

 const rg = document.querySelector("#rg");
 function validarRG() {
    let rgValido = /^[0-9]{2,3}\.?[0-9]{2,3}\.?[0-9]{3}\-?[A-Za-z0-9]{1,3}$/;
  
    if (rgValido.test(rg.value) === true) {
      rg.classList.remove("is-invalid");
      rg.classList.add("is-valid");
    } else {
      rg.classList.remove("is-valid");
      rg.classList.add("is-invalid");
    }
  }
  
  // ----------- NÚMERO ------------- //
  
  const numero = document.querySelector("#numero");
  
  function validarNumero() {
    if (numero.value === "") {
      numero.classList.remove("is-valid");
      numero.classList.add("is-invalid");
    } else {
      numero.classList.remove("is-invalid");
      numero.classList.add("is-valid");
    }
  }
  
  // ----------- REDIRECIONAR ------------- //
  
  function redirecionar() {
    let redirecionarBtn = document.querySelectorAll(".inputs");
    redirecionarBtn = Array.from(redirecionarBtn);
  
    let valido = redirecionarBtn.every((item) =>
      item.classList.contains("is-valid")
    );
  
    const aviso = document.querySelector('h6');
  
    if (valido) {
      aviso.style.color = 'green'
      aviso.textContent = 'Cadastro efetuado!';
    } else {
      aviso.textContent = '*Preencha todos os campos corretamente!';
      aviso.style.color = 'red'
    }
  }
  
  // ----------- BOTÃO ------------- //
  
  const botao = document.querySelector(".cadastro-btn");
  
  botao.addEventListener("click", function (event) {
    event.preventDefault();
  
    validarNome();
    validarEmail();
    validarSenha();
    confirmarPassword();
    validarRG();
    getApi();
    validarNumero();
    redirecionar();
  });


