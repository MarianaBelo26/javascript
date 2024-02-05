const form = document.querySelector('.quiz-form')
const buttonInitQuiz = document.querySelector('.button-init-quiz')
const initionPage = document.querySelector('.inition-page')
const finalResult = document.querySelector('.final-score-container')


const correctAnswers = ['A','D','B','A','D','C','A','B','A','C']

let score = 0

const appearDisappearButton = () =>{
    initionPage.classList.add('d-none')
    form.classList.remove('d-none')}
	
buttonInitQuiz.addEventListener('click', appearDisappearButton)

const getUserAnswers = () => correctAnswers.map((_,index) => 
form[`inputQuestion${index + 1}`].value)


const calculateUserScore = (userAnswers) =>{
	userAnswers.forEach((userAnswer, index) =>{
		const isUserAnswerCorrect = userAnswer === correctAnswers[index]
		
		if(isUserAnswerCorrect){
			score += 10
		}
	})
}

const showResultScore = ()=>{
	scrollTo(0,0)
	finalResult.classList.remove('d-none')
}

const animationResultScore = ()=>{
	let counter = 0
	const timer = setInterval(() =>{
	   
	if(counter === score){
	   clearInterval(timer)
	}
	
	finalResult.querySelector('span').textContent = `${counter++}%` 
   }, 20)
}

const showRestartPopup = () =>{
	const restartQuiz = setTimeout(() =>{
		const popupWrapper = document.querySelector('.popup-wrapper') 
		const restartPopup = document.querySelector('.container-restart-popup')
		const yesButtonPopup = document.querySelector('.yes-button-popup')
		const noButtonPopup = document.querySelector('.no-button-popup')
		
		const appearDisappearButtonYes = () =>{
			restartPopup.classList.add('d-none')
			finalResult.classList.add('d-none')
			initionPage.classList.remove('d-none')
			form.classList.add('d-none')
			popupWrapper.style.display = 'none'
		}
		const appearDisappearButtonNo = () =>{
			restartPopup.classList.add('d-none')
			popupWrapper.style.display = 'none'
		}
		
		restartPopup.classList.remove('d-none')
		popupWrapper.style.display = 'block'
		
		yesButtonPopup.addEventListener('click', appearDisappearButtonYes)	
		noButtonPopup.addEventListener('click', appearDisappearButtonNo)
	
	}, 2350)
}


form.addEventListener('submit', event =>{
    event.preventDefault()
	score = 0 
	
   const userAnswers = getUserAnswers()
   
   calculateUserScore(userAnswers)
   showResultScore()
   animationResultScore()
   showRestartPopup()
   
})

