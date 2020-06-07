$(document).ready(function(){
    $(function () {
        $('.ct-nav').click(function(){
            $(".ct-link").attr('class','ct-link ct-hovers');
        });
        $('.close-ct').click(function(){
            $(".ct-link").attr('class','ct-link');
        });
        $('.ct-links').click(function(){
            $(".ct-link").attr('class','ct-link');
            $("#ct-name").html($(this).html());
        });
        $(".box dd").not(".indexSelect").css("background-color","rgb(245, 245, 245)");
        $(".box dd").not(".indexSelect").css("border-color","rgb(245, 245, 245)");
        $(".box").on("click","dd",function(){  
            if($(this).css("background-color")=="rgb(245, 245, 245)" && $(this).css("border-color")=="rgb(245, 245, 245)"){
                $(this).css("background-color","#FFFFFF")
                $(this).css("border-color","#ffa700")
            }else if($(this).css("background-color")=="rgb(255, 255, 255)" && $(this).css("border-color")=="rgb(255, 167, 0)"){
                $(this).css("background-color","#f5f5f5");
                $(this).css("border-color","#f5f5f5");}
            });
        });
    });