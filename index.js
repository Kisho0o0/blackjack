let cards = []
let hasBlackjack = false 
let isAlive = false
let cardsView = document.getElementById("cardsEl")
let sumScore = document.getElementById("sumEl")

        function getRandomCard(){
            let randomCard = Math.floor(Math.random() * 13) + 1
            if (randomCard === 1 ) {
                return 11
            } 
            else if (randomCard >=11) {
                return 10
            } 
            else {
                return (randomCard)
            }
        }
        
            function startGame() {
                let firstCard = getRandomCard()
                let secondCard = getRandomCard() 
                cards = [firstCard , secondCard]
                sum = firstCard + secondCard 
                
                renderGame()
            } 

            
    function renderGame () {
        cardsView.textContent ="CARDS : "
        for  (let i = 0 ; i <cards.length; i++ ) {
            cardsView.textContent += cards[i] +" " }
        sumScore.textContent= "SUM : " +  sum 
        let messageEl = document.getElementById("message")
        if (sum <= 20) {    
                messageEl.textContent = ("Do You Want To Draw Another Card ?!")
                isAlive = true 
                hasBlackjack = false
        } 
        else if (sum === 21) {
            messageEl.textContent = ("Wohoooo!!!! A BlackJack ?!")
            hasBlackjack = true 
            isAlive = false
        }
        else {
            messageEl.textContent = ("You're Out Of The Game")
            hasBlackjack = false
            isAlive = false
        }
                         } 
        function newCard()  
        {

            if (isAlive === true && hasBlackjack ===false)
                { 
                    let card = getRandomCard() 
                    sum += card 
                    cards.push(card)
                    renderGame()
                }
        }

            