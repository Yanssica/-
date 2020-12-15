$(function(){
   
    $(".currur1").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".second").fadeIn()
        $(".first").fadeOut()
    })
    $(".currur2").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".first").fadeIn()
        $(".second").fadeOut()
    })




    $(".zan").click(function(){
        $(".zan>img").toggleClass("active");
        if( $(".zan>img").hasClass("active")){
            $(".zan-span").html(4)
        }else {
            $(".zan-span").html(3)
        }
    })

    $(".more span").click(function(){
       
        $(".more img").attr("src","../img/loading-icon.gif")
    }) 
})