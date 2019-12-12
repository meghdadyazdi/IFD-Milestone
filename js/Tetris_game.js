// ---------------------framework---------------------
let canvas = document.getElementById("frame");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#ccc";
ctx.fillRect(0, 0, canvas.width, canvas.height);
// console.log(canvas.width);
// console.log(canvas.height);
ctx.scale(20, 20)

// ---------------------tetriminos---------------------
let L = [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 1]
]


let Z = [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0]
]


let S = [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0]
]
let J = [
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 0]
]
let T = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0]
]
let I = [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0]
]
// let O=[
//     [0,0,0,0],
//     [0,1,1,0],
//     [0,1,1,0],
//     [0,0,0,0]
// ]
let O = [
    [1, 1],
    [1, 1]
]

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
    reset() {
        this.x = 3;
        this.y = 0;
    }
}
let Tetrimos = new Tetrimos1(3, 0, Z, "#f00000");
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
    // Tetrimos.block.forEach(function (rows, y) {
    //     rows.forEach(function (value, x) {
            // if (value !== 0) {
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
                ctx.fillStyle = Tetrimos.color;
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
        Tetrimos.moveDown();

        if (collision(board, Tetrimos)) {
            Tetrimos.moveUp();
            updateBoard(board, Tetrimos);
            Tetrimos.reset();
        }

        deltaT = 0;
    }
    deltaT += actionT
    ctx.fillStyle = "#ccc";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawBoard(board, Tetrimos)
    drawTetriminos(Tetrimos, "#a000f0");
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
            if (Tetrimos.block[y][x] == 1 && 
                (board[Tetrimos.y + y] && 
                 board[Tetrimos.y + y][Tetrimos.x + x]) != 0) {
                return true;
            }
        }
    }
    return false;
}


