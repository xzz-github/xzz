$(function(){
    $('<link rel="stylesheet" href="css/footer.css">').appendTo("head");
    $.ajax({
        url:"footer.html",
        type:"get",
        //html:"../header.html",
        //dataType:"json",
        success: function(res) {
            $(res).replaceAll("#footer");
        }
    })
})