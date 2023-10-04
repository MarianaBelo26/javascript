function verificar(){
    var data = new Date();
    var anoAtual = data.getFullYear();
    var fano = window.document.getElementById('inumber');
    var resultado = window.document.getElementById('resultado');
    var sexo = document.getElementsByName('sexo');
    var genero = '';
    var img = document.createElement('img');
    
    if(fano.value.length == 0 || fano.value > anoAtual){
        window.alert('[ERRO] Verifique os dados, e tente novamente!');
    }else{
        var ano = Number(fano.value);
        var idade = anoAtual - ano;
    }

    if(sexo[0].checked){
        genero = 'Mulher';
        if(idade > 0 && idade < 5){
            img.setAttribute('src', 'images/bebeMenina.png');
        }else if(idade < 12){
            img.setAttribute('src', 'images/menina.png');
        }else if(idade < 18){
            img.setAttribute('src', 'images/jovemMenina.png');
        }else if(idade<60){
            img.setAttribute('src', 'images/mulher.png');
        }else{
            img.setAttribute('src', 'images/idosa.png');
        }
    }else{
        genero = 'Homem';
        if(idade > 0 && idade < 5){
            img.setAttribute('src', 'images/bebeMenino.png');
        }else if(idade < 12){
            img.setAttribute('src', 'images/menino.png');
        }else if(idade < 18){
            img.setAttribute('src', 'images/jovemMenino.png');
        }else if(idade<60){
            img.setAttribute('src', 'images/homem.png');
        }else{
            img.setAttribute('src', 'images/idoso.png');
        }
    }

    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    resultado.appendChild(img);
}