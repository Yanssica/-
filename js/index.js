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
    var arr = [];
    $.get("http://192.168.1.94:3000/play/new", function (data) {
        arr = data;
    }, "json");
    $(".t_jz").click(function(){
        $(".t_jz_div").css("display","none");
        $(".t_jz_img").css("display","block");
    })
})();