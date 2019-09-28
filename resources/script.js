//JS file for Tic-Tac-Toe
const Player = (name, symbol) => {
    const getName = () => name;
    const getSymbol = () => symbol;
    return {name , symbol, getName, getSymbol}
};

let container = document.querySelector('#gridContainer');

const Board = (() => {
    let board = [];
    const string = "1fr ";
    
    const displayBoard = () => {}
    const generateBoard = () => {
        //Creates div grid by utilizing the CSS styling method
        //templateRows and templateCols both take string "1fr" a 'numDiv' number of times
        container.style.gridTemplateRows = string.repeat(3);
        container.style.gridTemplateColumns = string.repeat(3);

        //For loops creates each cell (div) element and adds it to classList where eventListener will be added
        for(let i = 0; i < 9; i++)
        {
            const cell = document.createElement('div');
            cell.classList.add("cell");
            container.appendChild(cell);
        }
    }
    return {displayBoard, generateBoard};
})();

function makePlay()
{
    Board.generateBoard();
}