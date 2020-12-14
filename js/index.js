(function () {
    $(document).ready(function () {
        $('#partial-view').partialViewSlider();
    });
    $(document).ready(function () {
        var partialView = $('#partial-view').partialViewSlider();
        $('#prev').on('click', function () {
            partialView.prev();
        });
        $('#next').on('click', function () {
            partialView.next();
        });
    });
    $(".t_jz").click(function () {
        $(".t_jz_div").css("display", "none");
        $(".t_jz_img").css("display", "block");
    })
    $(".l_dl").click(function () {
        $(".l_box").css("display", "block");
    });
    $(".l_zc").click(function () {
        location = "registerpage.html"
    });
    $(".t_box_img").click(function () {
        location = "index.html";
    })
})();