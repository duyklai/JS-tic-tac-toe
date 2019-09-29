//JS file for Tic-Tac-Toe
const Player = (name, symbol) => {
    const getName = () => name;
    const getSymbol = () => symbol;
    return {getName, getSymbol}
};

const Board = (() => {
    // Private variables used in this module
    let container = document.querySelector('#gridContainer');
    container.style.display = "none";

    let turn = document.querySelector('#turnContainer');
    let turnMsg = document.createElement('h3');
    
    let winner = document.querySelector('#winnerMsg');
    let board = [[1,2,3], [4,5,6], [7,8,9]];
    let turnCounter = 1;
    let firstTime = true;
    let lastPlay = ['', '', ''];
    let won = false;
    const string = "1fr ";

    // Function to generate the board; will be done onload
    const generateBoard = () => {
        if (firstTime)
        {
            //Creates div grid by utilizing the CSS styling method
            //templateRows and templateCols both take string "1fr" a 'numDiv' number of times
            container.style.gridTemplateRows = string.repeat(3);
            container.style.gridTemplateColumns = string.repeat(3);

            //For loops creates each cell (div) element and adds it to classList where eventListener will be added
            for(let i = 1; i < 10; i++)
            {
                const cell = document.createElement('div');
                cell.classList.add("cell");
                cell.setAttribute("value", i);
                container.appendChild(cell);
            }
            container.style.display = "";
            turnMsg.innerHTML = 'Player\'s One Turn!'
            turn.appendChild(turnMsg);
            firstTime = false;
        }
    } // End of function generateBoard()

    // Function to take input from players and record the indices
    const playTurn = () => {
        let cell = document.querySelectorAll('.cell');
        let divArr = Array.from(cell);
        let index_element = -1;
        let index_board = -1;

        for (e of divArr)
        {
            e.addEventListener('click', function(e) {
                if(e.target.innerHTML == "" && !won)
                {
                    // Getting the value of cell, find the indices in board array
                    for (let element of board)
                    {
                        search = e.target.getAttribute('value');
                        index_element = element.indexOf(+search);
                        if (index_element != -1)
                        {
                            index_board = board.indexOf(element);
                            break; 
                        }
                    }
                    // Fill the square depending on turn and record the play
                    if(selectTurn() == 1)
                    {
                        lastPlay[2] = 'Player One';
                        board[index_board][index_element] = 'X';
                        e.target.innerHTML = 'X';
                    }
                    else
                    {
                        lastPlay[2] = 'Player Two';
                        board[index_board][index_element] = 'O';
                        e.target.innerHTML = 'O';
                    }
                    lastPlay[0] = [index_board];
                    lastPlay[1] = [index_element];
                    checkStatus();
                    if (won || turnCounter == 10)
                    {
                        declareWinner(lastPlay[2], divArr);
                    }
                }
            });
        }
    } // End of function playTurn()

    // Function to alternate the turns
    const selectTurn = () => { 
        if(turnCounter % 2 != 0)
        {
            turnCounter++;
            turnMsg.innerHTML = 'Player\'s One Turn!'
            return 1;
        }
        else
        {
            turnCounter++;
            turnMsg.innerHTML = 'Player\'s Two Turn!'
            return 2;
        }
    } // End of function selectTurn()

    // Function to check for win conditions
    const checkStatus = () => {
        row = lastPlay[0];
        col = lastPlay[1];
        won = rowCrossed(row) || colCrossed(col) || diagonalCrossed();
    } // End of function checkStatus()

    // Helper function to check for 3 in a row
    const rowCrossed = (row) => {
        if (board[row][0] == board[row][1] && board[row][1] == board[row][2])
            return true;
        return false;
    } // End of function row_crossed(row)

    // Helper function to check for 3 in a column
    const colCrossed = (col) => {
        if (board[0][col] == board[1][col] && board[1][col] == board[2][col])
            return true;
        return false; 
    } // End of function col_crossed(col)

    // Helper function to check for 3 in a row for both diagonals
    const diagonalCrossed = () => {
        if (board[0][0] == board[1][1] && board[1][1] == board[2][2])
            return true;
        else if (board[0][2] == board[1][1] && board[1][1] == board[2][0])
            return true;
        return false;
    } // End of function diagonal_crossed

    const declareWinner = (player, divArr) => {
        if (won == true)
        {
            let tempMsg = document.createElement('h3');
            tempMsg.innerHTML = `Congratulations to ${player}!`;
            winner.appendChild(tempMsg);
        }
        else
        {
            let tempMsg = document.createElement('h3');
            tempMsg.innerHTML = "It is a draw!";
            winner.appendChild(tempMsg);
        }

    } // End of function declareWinner(player)

    // Function to remake the game; reset all variables
    const remake = () => {
        while(container.firstChild)
            container.removeChild(container.firstChild);
        
        while(winner.firstChild)
            winner.removeChild(winner.firstChild);

        // RESET ALL THE VARIABLES
        board = [[1,2,3], [4,5,6], [7,8,9]];
        turnCounter = 1;
        lastPlay = ['', '', ''];
        won = false;
        firstTime = true;
        generateBoard();
    } // End of function remake()

    return {generateBoard, playTurn, remake};
})();

function makeBoard()
{
    Board.generateBoard();
    // const player1 = Player('Player One', 'X');
    // const player2 = Player('Player Two', 'O');
    Board.playTurn();
}

function clearGame()
{
    Board.remake();
    Board.playTurn();
}