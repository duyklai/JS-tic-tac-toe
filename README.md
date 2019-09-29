# JavaScript: Tic-Tac-Toe

This is my JS implementation of the game tic-tac-toe. The main goal here is to have as little global code as possible, tucking everything away inside of a module or factory.

The grid (game board) was made from template grid with 'div' elements filling the board. After loading `index.html`, player can press Start Game to create the game board and start playing. Player one will always be X and Player Two will always be O. The game ends when one player gets all three symbol in a row, column, or diagonally. If no one is able to do so and there are no more spaces left on the board, the game will announce a tie.

Currently does not support player's name input or special symbol usage (does have factory function of player tho). Still have problem with aligning text inside game board. Works best on 1920x1080 resolution.