function  carregar(){
	
	var msg = window.document.getElementById('msg');
	var img = window.document.getElementById('imagem');
	var data = new Date();
	var hora = data.getHours();
	
	msg.innerHTML = `Agora são ${hora} horas.`;
	
	if(hora > 0 && hora < 12){
		img.src = 'imagens/manha.jpg';
		document.body.style.backgroundColor = 'rgb(135, 155, 255)';
		
	}else if(hora >= 12 && hora <= 18){
		img.src = 'imagens/tarde.jpg';
		document.body.style.backgroundColor = 'rgba(131,91,66,255)';
		
	}else{
		img.src = 'imagens/noite.jpg';
		document.body.style.backgroundColor = 'rgba(12, 28, 106, 0.823)';
	}
}  