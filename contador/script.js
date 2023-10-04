function contar(){

    let resultado = document.getElementById('resultado');
    let inicio =  Number(document.getElementById('iinicio').value);
    let fim =  Number(document.getElementById('ifim').value);
    let passo =  Number(document.getElementById('ipasso').value);
    
        if(inicio == 0 || fim == 0){
            resultado.innerHTML = 'Impossivel contar. Faltam dados!';
        }else{
            if(passo <= 0){
                    window.alert('[ERRO]Passo inválido, considerando PASSO = 1');
                    passo = 1;
                }
                
            resultado.innerHTML = 'Contando: <br>';
            if(inicio < fim){
                for(let x = inicio; x <= fim; x += passo){
                    resultado.innerHTML += ` ${x} `;
                }
            }else{
                for(let x = inicio; x >= fim; x -= passo){
                    resultado.innerHTML += ` ${x} `
                }
            }
        
        }
    }