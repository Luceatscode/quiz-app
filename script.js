const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])  
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
}       else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }   else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What is an array?',
        answers: [
            { text: 'A group of similar elements or data', correct: true },
            { text: 'A string of code', correct: false },
            { text: 'An error in your code', correct: false },
            { text: 'A ray of code from the sun', correct: false },
        ]
    },
    {
        question: 'What is used for styling your webpage?',
        answers: [
            { text: 'HTML', correct: false },
            { text: 'Javascript', correct: false },
            { text: 'MySQL', correct: false },
            { text: 'CSS', correct: true },
        ]
    },
    {
        question: 'What does HTML stand for?',
        answers: [
            { text: 'Hypertone Mover Layout', correct: false },
            { text: 'Hypertext Markup Language', correct: true },
            { text: 'Hard Text Marker Language', correct: false },
            { text: 'How To Make Lasagna', correct: false },
        ]
    },
    {
        question: 'What is a Path?',
        answers: [
            { text: 'Something you come across in the woods', correct: false },
            { text: 'Left or Right', correct: false },
            { text: 'A string of characters used to uniquely identify a location in a directory.', correct: true },
            { text: 'Up or Down', correct: false },
        ]
    },
]