let firstCard = 10
let secondCard = 11
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
        sumEl.innerHTML = "Sum: " + sum
    } else if (sum === 21) {
        message = "Woohoo! You've got Blackjack! 🥳"
        sumEl.innerHTML = "Sum: " + sum
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        sumEl.innerHTML = "Sum: " + sum
        isAlive = false
    }
    messageEl.innerText = message
}

function newCard() {
    console.log("Drawing a new card from the deck!")
    let drawCard = 2;
    sum += drawCard
    cards.push(drawCard)
    console.log(cards)
    renderGame()
}
