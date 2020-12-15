(function () {
    $(".xing").click(function () {
        $(".xing2").css("display", "block");
        $(".xing").css("display", "none");
        $(".t_dg_text").html("喜欢 16");
    });
    $(".xing2").click(function () {
        $(".xing").css("display", "block");
        $(".xing2").css("display", "none");
        $(".t_dg_text").html("喜欢 15");
    });
    $(".a1_fen").click(function () {
        $(".bshare-custom").fadeIn();
    })
})()
