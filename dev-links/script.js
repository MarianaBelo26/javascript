function toggleMode(){
	const body = document.body
	
	body.classList.toggle('dark')
	
	const img = document.querySelector('#back img')
	
	if( body.classList.contains('dark')){
		img.setAttribute('src', 'image/moon.jpg')
		img.setAttribute('alt', 'desenho de montanhas na cor branca')
	}else{
		img.setAttribute('src', 'image/sun.jpg')
		img.setAttribute('alt', 'desenho de coqueiros na cor preta')
	}
}
