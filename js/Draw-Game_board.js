export function drawBoard(board, Tetrimos) {
    board.forEach(function (rows, y) {
        rows.forEach(function (value, x) {
            if (value !== 0) {
                ctx.fillStyle = Tcolor[value - 1];
                ctx.fillRect(x, y, 1, 1);
            }
        });
    });
}