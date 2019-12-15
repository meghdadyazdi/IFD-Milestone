$(document).ready(function () {
    $("#btnSubmit").bind("click", function () { $('#' + '<%=btnUpload.ClientID %>').trigger("click"); return false; });
    $(document).keydown(function (e) {
        if (e.which == 37) {
            Tetrimos.moveLeft();
            if (collision(board, Tetrimos)) {
                Tetrimos.moveRight();
            }
        }
        else if ((e.keyCode == 38)) {
            Tetrimos.rotateClockwise();
            if (collision(board, Tetrimos)) {
                Tetrimos.rotateCounterClockwise();
            }
        }
        else if ((e.keyCode == 17)) {
            Tetrimos.rotateCounterClockwise();
            if (collision(board, Tetrimos)) {
                Tetrimos.rotateCounter();
            }
        }
        else if (e.keyCode == 39) {
            Tetrimos.moveRight();
            if (collision(board, Tetrimos)) {
                Tetrimos.moveLeft();
            }
        }
        else if ((e.keyCode == 40)) {
            Tetrimos.moveDown();
            if (collision(board, Tetrimos)) {
                Tetrimos.moveUp();
            }
        }
        else if ((e.keyCode == 32)) {
            if (gameStatus) {
                gameStatus = false;
            } else {
                gameStatus = true;
            }

        }

    });
    $("#leftarrow").click(function () {
        Tetrimos.moveLeft();
        if (collision(board, Tetrimos)) {
            Tetrimos.moveRight();
        }
    });

    $("#rotatearrow").click(function () {
        Tetrimos.rotateClockwise();
        if (collision(board, Tetrimos)) {
            Tetrimos.rotateCounterClockwise();
        }
    });

    $("#rightarrow").click(function () {
        Tetrimos.moveRight();
        if (collision(board, Tetrimos)) {
            Tetrimos.moveLeft();
        }
    });

    $("#downarrow").click(function () {
        Tetrimos.moveDown();
        if (collision(board, Tetrimos)) {
            Tetrimos.moveUp();
        }
    });

    $("#inner-circle").click(function () {
        if (gameStatus) {
            gameStatus = false;
        } else {
            gameStatus = true;
        }
    });


});