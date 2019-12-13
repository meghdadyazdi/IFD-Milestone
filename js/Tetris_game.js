// ---------------------framework---------------------
let canvas = document.getElementById("frame");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#555";
ctx.fillRect(0, 0, canvas.width, canvas.height);
// console.log(canvas.width);
// console.log(canvas.height);
ctx.scale(20, 20)

// ---------------------tetriminos---------------------
class Tetrimos1 {
    constructor(x, y, block, color) {
        this.x = x;
        this.y = y;
        this.block = block;
        this.color = color;
    }
    moveDown() {
        this.y++;
    }
    moveUp() {
        this.y--;
    }
    moveRight() {
        this.x++;
    }
    moveLeft() {
        this.x--;
    }
    // reset() {
    //     this.x = 3;
    //     this.y = -2;
    // }
    rotateClockwise() {
        let n = this.block.length;
        for (let i = 0; i < n / 2; i++) {
            for (let j = i; j < n - i - 1; j++) {
                let tmp = this.block[i][j];
                this.block[i][j] = this.block[n - j - 1][i];
                this.block[n - j - 1][i] = this.block[n - i - 1][n - j - 1];
                this.block[n - i - 1][n - j - 1] = this.block[j][n - i - 1];
                this.block[j][n - i - 1] = tmp;
            }
        }
    }
    rotateCounterClockwise() {
        let n = this.block.length;
        for (let i = 0; i < n / 2; i++) {
            for (let j = i; j < n - i - 1; j++) {
                let tmp = this.block[i][j];
                this.block[i][j] = this.block[j][n - i - 1];
                this.block[j][n - i - 1] = this.block[n - i - 1][n - j - 1];
                this.block[n - i - 1][n - j - 1] = this.block[n - j - 1][i];
                this.block[n - j - 1][i] = tmp;
            }
        }
    }
}

let Tcolor = ["#f0a000", "#f00000", "#00f000", "#0000f0", "#a000f0", "#00f0f0", "#f0f000"]
function randomTetrimos() {
    let Tetriminos = [
        [[0, 1, 0],
        [0, 1, 0],
        [0, 1, 1]],
        [[2, 2, 0],
        [0, 2, 2],
        [0, 0, 0]],
        [[0, 3, 3],
        [3, 3, 0],
        [0, 0, 0]],
        [[0, 4, 0],
        [0, 4, 0],
        [4, 4, 0]],
        [[0, 0, 0],
        [5, 5, 5],
        [0, 5, 0]],
        [[0, 6, 0, 0],
        [0, 6, 0, 0],
        [0, 6, 0, 0],
        [0, 6, 0, 0]],
        [[7, 7],
        [7, 7]]
    ]

    let Tindex = Math.random() * Tetriminos.length | 0;
    let Tetrimos = new Tetrimos1(3, 0, Tetriminos[Tindex], Tcolor[Tindex]);
    return [Tetrimos, Tindex];
}

// let Tetrimos = [];
// let Tindex= 1;
[Tetrimos, Tindex] = randomTetrimos();
// drawTetriminos(L,"#f0a000")
// drawTetriminos(Z,"#f00000")
// drawTetriminos(S,"#00f000")
// drawTetriminos(J,"#0000f0")
// drawTetriminos(T,"#a000f0",Tetrimos)
// drawTetriminos(I,"#00f0f0")
// drawTetriminos(O,"#f0f000")

let i;
const board = [];
for (j = 0; j < canvas.height / 20; j++) {
    board.push(new Array(canvas.width / 20).fill(0));
}


movement()

// ---------------------Functions and classes---------------------

// Draw each Tetriminos
function drawTetriminos(Tetrimos) {
    for (let y = 0; y < Tetrimos.block.length; ++y) {
        for (let x = 0; x < Tetrimos.block[y].length; ++x) {
            if (Tetrimos.block[y][x] !== 0) {
                ctx.fillStyle = Tetrimos.color;
                ctx.fillRect(x + Tetrimos.x, y + Tetrimos.y, 1, 1);
            }
        };
    };
}

function drawBoard(board, Tetrimos) {
    board.forEach(function (rows, y) {
        rows.forEach(function (value, x) {
            if (value !== 0) {
                ctx.fillStyle = Tcolor[value - 1];
                ctx.fillRect(x, y, 1, 1);
            }
        });
    });
}

// let i=0;
var deltaT = 0;
function movement(time, delta) {
    let actionT = time % 100;
    if (deltaT > 1000) {
        if (collision(board, Tetrimos)) {
            for (j = 0; j < canvas.height / 20; j++) {
                for (i = 0; i < canvas.width / 20; i++) {
                board[j][i]=0;
            }
        }
            ctx.fillStyle = "#eee";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                drawBoard(board, Tetrimos)
                
        }
        Tetrimos.moveDown();
        if (collision(board, Tetrimos)) {
            Tetrimos.moveUp();
            updateBoard(board, Tetrimos);
            [Tetrimos, Tindex] = randomTetrimos();
        }

        deltaT = 0;
    }
    deltaT += actionT
    ctx.fillStyle = "#555";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawBoard(board, Tetrimos)
    drawTetriminos(Tetrimos);
    // score();
    requestAnimationFrame(movement)
}

function updateBoard(board, Tetrimos) {
    Tetrimos.block.forEach(function (rows, y) {
        rows.forEach(function (value, x) {
            if (value !== 0) {
                board[y + Tetrimos.y][x + Tetrimos.x] = value;
            }
        });
    });
} 

function collision(board, Tetrimos) {
    for (let y = 0; y < Tetrimos.block.length; ++y) {
        for (let x = 0; x < Tetrimos.block[y].length; ++x) {
            if (Tetrimos.block[y][x] != 0 &&
                (board[Tetrimos.y + y] &&
                    board[Tetrimos.y + y][Tetrimos.x + x]) != 0) {
                return true;
            }
        }
    }
    return false;
}

// function score(){
//      for (j = canvas.height / 20-1; j < -; --j) {
//                 for (i = 0; i < canvas.width / 20; i++) {
//                 board[j][i]=0;
//             }
// }

