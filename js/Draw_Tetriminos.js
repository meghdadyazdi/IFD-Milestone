export function drawTetriminos(Tetrimos) {
    for (let y = 0; y < Tetrimos.block.length; ++y) {
        for (let x = 0; x < Tetrimos.block[y].length; ++x) {
            if (Tetrimos.block[y][x] !== 0) {
                ctx.fillStyle = Tetrimos.color;
                ctx.fillRect(x + Tetrimos.x, y + Tetrimos.y, 1, 1);
            }
        };
    };
}