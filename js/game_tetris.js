// ---------------------framework---------------------
let canvas=document.getElementById("frame");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#000";
ctx.fillRect(0, 0, canvas.width, canvas.height);
console.log(canvas.width);
console.log(canvas.height);
ctx.scale(20,20)

// ---------------------tetriminos---------------------
let L=[
    [0,1,0],
    [0,1,0],
    [0,1,1]
]


let Z=[
    [1,1,0],
    [0,1,1],
    [0,0,0]
]


let S=[
    [0,1,1],
    [1,1,0],
    [0,0,0]
]
let J=[
    [0,1,0],
    [0,1,0],
    [1,1,0]
]
let T=[
    [0,0,0],
    [1,1,1],
    [0,1,0]
]
let I=[
    [0,1,0,0],
    [0,1,0,0],
    [0,1,0,0],
    [0,1,0,0]
]
let O=[
    [1,0,0,0],
    [0,1,1,0],
    [0,1,1,0],
    [0,0,0,0]
]
drawTetriminos(J)
// ---------------------Functions and classes---------------------

// Draw each Tetriminos
function drawTetriminos(tetriminos){
     for (y = 0; y < tetriminos.length; y++){
         for (x = 0; x < tetriminos.length; x++) {
             console.log(tetriminos.value);
             if (tetriminos[x][y] !==0){
            ctx.fillStyle="#f0aFFF";
            ctx.fillRect(y,x,1,1);
        }
         }
     }


//     tetriminos.forEach(function(row,y){
//     row.forEach(function(value,x){
//         if (value !==0){
//             ctx.fillStyle="#f0a000";
//             ctx.fillRect(x,y,1,1);
//         }
//     });
// });
}