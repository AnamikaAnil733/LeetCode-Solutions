/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
    let count = 0

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] == "X") {
                let c = true
                if (i - 1 >= 0 && board[i - 1][j] == "1") {
                    c = false
                    board[i][j] = "1"
                }
                if (i + 1 < board.length && board[i + 1][j] == "1") {
                    c = false
                    board[i][j] = "1"
                }
                if (j - 1 >= 0 && board[i][j - 1] == "1") {
                    c = false
                    board[i][j] = "1"
                }
                if (j + 1 < board[i].length && board[i][j + 1] == "1") {
                    c = false
                    board[i][j] = "1"
                }
                if (c == true) {
                    board[i][j] = "1"
                    count++
                }
            }
        }
    }
    return count
};

