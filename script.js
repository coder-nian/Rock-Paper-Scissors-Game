const totalScore = {computerScore: 0, playerScore: 0}

function getComputerChoice() {
  const rpsChoice = ['Rock', 'Paper', 'Scissors']
  const randomNumber = Math.floor(Math.random() * 3)
  return rpsChoice[randomNumber]
}

function getResult(playerChoice, computerChoice) {
  let score  
    
  if (playerChoice == computerChoice) {
    score = 0
  } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1
  } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1
  } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1
  } else {
    score = -1
  }

  return score
}

function showResult(score, playerChoice, computerChoice) {
  const result = document.getElementById('result')
  const hands = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
  const computerScoreDiv = document.getElementById('computer-score')

  if (score == 1) {
    result.innerText = 'You Win'
  } else  if (score == -1) {
    result.innerText = 'You Lose!'
  } else {
    result.innerText = "It's a Draw!"
  }

  hands.innerText = `👦 ${playerChoice} VS 🤖 ${computerChoice}`
  playerScoreDiv.innerText = `Your Score: ${totalScore['playerScore']}`
  computerScoreDiv.innerText = `Computer Score: ${totalScore['computerScore']}`
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice, computerChoice)
  totalScore['playerScore'] += score
  totalScore['computerScore'] -= score
  showResult(score, playerChoice, computerChoice)
}

function playGame() {
  const rpsButtons = document.querySelectorAll('.rpsButton')

  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })
 
  const endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()
}

function endGame() {
  totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0
  const result = document.getElementById('result')
  const hands = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
  const computerScoreDiv = document.getElementById('computer-score')

  result.innerText = ''
  hands.innerText = ''
  playerScoreDiv.innerText = ''
  computerScoreDiv.innerText = ''
}

playGame()