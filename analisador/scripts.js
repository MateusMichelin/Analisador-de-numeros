
    var number = document.querySelector("input#n1");
    var lista = document.getElementById("seltab");
    var result = document.getElementById("result");
    var valores = [];
    var total = 0;
    function isNumero(n) {
        if (Number(n) >= 1 && Number(n) <= 100) {
            return true;
        } else {
            return false;
        }
    }

    function isLista(n, l) {
        if (l.indexOf(Number(n)) != -1) {
            return true;
        } else {
            return false;
        }   
    }

    function addNum() {
        if (isNumero(number.value) && !isLista(number.value, valores)) {
            
            valores.push(Number(number.value))
            
            let item = document.createElement('option')
            item.text = `Valor ${number.value} Adicionado.`
            lista.appendChild(item)
            
        } else {
            window.alert("Valor inválido ou já encontrado na lista!");
        }

        number.value = ''
        number.focus()
    }
    
    function checar(){
        if (valores.length == 0){
            window.alert('Adicione valores antes de finalizar.')
        }else{
        
        valores.sort();
        var cadastrados = valores.length;
        var soma = 0;
        var maior = 0;
        var menor = 101;
        var media 
         
        for (var i = 0; i < valores.length; i++){

            soma += valores[i];


            if(valores[i] > maior){

                maior = valores[i];
            }

            if(valores[i] < menor){
                menor = valores[i]
            }



        }

        media = soma / valores.length
       
        result.style.fontSize = '20px'
        result.innerHTML = ''
        result.innerHTML = `Ao todo, temos <strong>${cadastrados}</strong> itens cadastrados. <br><br>O maior valor é de <strong>${maior}</strong> <br><br> O menor valor é de <strong>${menor}</strong> <br><br>
        Somando todos os valores temos <strong>${soma}</strong> <br><br> A media total dos valores é de <strong>${media}</strong>`
        }
    }
      
        
    















