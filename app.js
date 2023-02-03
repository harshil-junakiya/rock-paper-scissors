const game = () =>{
    let pScore = 0; //Default Score
    let cScore = 0; //Default Score

    //Start Game Function 
    const newGame = () =>{
        const playBtn = document.querySelector('.intro button');  
        const introScreen = document.querySelector('.intro');
        const matchScreen = document.querySelector('.match');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener("animationend",function(){
                this.style.animation = "";
            })
        })
        playBtn.addEventListener('click' , () => {
            introScreen.classList.add('fadeOut');
            matchScreen.classList.remove('fadeOut');
        });
    };

    //Play Match 
    const playMatch = () => {
        const option = document.querySelectorAll('.option button');
        const playerHand = document.querySelector('.player-hand');
        const compHand = document.querySelector('.computer-hand');

        //Machine option
        const compOptions = ["rock","paper","scissors"];

        option.forEach(option => {
            option.addEventListener("click", function(){
                //Computer Choice
                const compNum = Math.floor(Math.random()* 3);
                const compChoice = compOptions[compNum];
                setTimeout (()=>{
                    //Comparing Hands
                compareHand(this.textContent,compChoice);

                //Updating images
                playerHand.src = `./img/${this.textContent}.png`;
                compHand.src = `./img/${compChoice}.png`;
                },  2000);
                
                
                //animation update
                playerHand.style.animation = "shakePlayer 2s ease";
                compHand.style.animation = "shakeComp 2s ease";
            });
        });
    };


    const upScore = () => {
        const playScore = document.querySelector('.player-score p');
        const cpScore = document.querySelector('.computer-score p');
        playScore.textContent = pScore;
        cpScore.textContent = cScore;

    }

    //Checking winner and looser
    const compareHand = (playerChoice,compChoice) => {
        //Update Text;
        const winner = document.querySelector('.winner')
        //checking for a tie
        if(playerChoice === compChoice){
            winner.textContent = "It is a TIE";
            return;
        }

        //checking for rock
        if(playerChoice === 'rock'){
            if(compChoice === 'scissors'){
                winner.textContent = "Player Wins"; 
                pScore++;
                upScore();
                return;
            }
            else{
                winner.textContent = "Computer Wins";
                cScore++;
                upScore();
                return;
            }
        }

        //checking for scissors
        if(playerChoice === 'scissors'){
            if(compChoice === 'rock'){
                winner.textContent = "Computer Wins";
                cScore++;
                upScore();
                return;
            }
            else{
                winner.textContent = "Player Wins";
                pScore++;
                upScore();
                return;
            }
        }

        //checking for paper
        if(playerChoice === 'paper'){
            if(compChoice === 'scissors'){
                winner.textContent = "Computer Wins";
                cScore++;
                upScore();
                return;
            }
            else{
                winner.textContent = "Player Wins";
                pScore++;
                upScore();
                return;
            }
        }
    }



    //Calling newGame function
    newGame();

    //Game Start
    playMatch();
};

//Start the game
game();