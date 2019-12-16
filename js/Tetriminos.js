export class Tetris {
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
