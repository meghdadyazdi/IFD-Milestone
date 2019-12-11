// ---------------------framework---------------------
let canvas=document.getElementById("frame");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#ccc";
ctx.fillRect(0, 0, canvas.width, canvas.height);
// console.log(canvas.width);
// console.log(canvas.height);
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
    [0,0,0,0],
    [0,1,1,0],
    [0,1,1,0],
    [0,0,0,0]
]

class Tetrimos1 {
  constructor(x,y,block,color) {
    this.x =x;
    this.y=y;
    this.block=block;
    this.color=color;
  }
  moveDown() {
    this.y+=.5;
  }
  moveRight() {
    this.x+=.5;
  }
  moveLeft() {
    this.x-=.5;
  }
}
let Tetrimos=new Tetrimos1(0,-2,L,"#f0a000");
// drawTetriminos(L,"#f0a000")
// drawTetriminos(Z,"#f00000")
// drawTetriminos(S,"#00f000")
// drawTetriminos(J,"#0000f0")
// drawTetriminos(T,"#a000f0",Tetrimos)
// drawTetriminos(I,"#00f0f0")
// drawTetriminos(O,"#f0f000")

$(document).ready(function(){
    $("#btnSubmit").bind("click",function(){$('#'+'<%=btnUpload.ClientID %>').trigger("click");return false;});
    $(document).keydown(function(e){
        if(e.which==37) {
            Tetrimos.moveLeft();
        }
        else if (e.keyCode == 39) {
        Tetrimos.moveRight();
    }
    else if (e.keyCode == 40) {
        Tetrimos.moveDown();
    }
    });
});



movement()
// ---------------------Functions and classes---------------------

// Draw each Tetriminos
function drawTetriminos(Tetrimos){
    Tetrimos.block.forEach(function(rows,y){
    rows.forEach(function(value,x){
        if (value !==0){
            ctx.fillStyle=Tetrimos.color;
            ctx.fillRect(x+Tetrimos.x,y+Tetrimos.y,1,1);            
        }
    });
});
}

// let i=0;
var deltaT=0;
function movement(time,delta) {
    let actionT=time%100;
    // let deltaT;

    // console.log(i)
    if (deltaT>1000){
        console.log(deltaT)
        Tetrimos.moveDown();
        console.log(Tetrimos.y)
        deltaT=0;
    }
    deltaT+=actionT
    ctx.fillStyle = "#ccc";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawTetriminos(Tetrimos, "#a000f0")
    requestAnimationFrame(movement)
}
