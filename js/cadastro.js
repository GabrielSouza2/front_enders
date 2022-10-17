function consultaEndereço(){
   cep = document.querySelector('#cep').value

  if (cep.length !== 8){
    alert('CEP Inválido!');
    return;
  }
  
    url = "https://viacep.com.br/ws/"+ cep +"/json/";

   fetch(url).then(function(response){
    response.json().then(function(data){
        console.log(data)
    })
   });
}
   

