
        function logar(){

            var Usuario = document.getElementById('Usuario').value;
            var senha = document.getElementById('senha').value;

            if(Usuario== "admin" && senha == "admin"){
                alert('Sucesso');
                location.href = "index.html";
            }else{
                alert('Usuario ou senha incorretos');
            }

        }
