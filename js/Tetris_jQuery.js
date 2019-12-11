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
