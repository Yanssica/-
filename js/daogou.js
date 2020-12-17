(function () {
    $(".t_kwzx_jz").click(function () {
        $(".t_kwzx_jz_div").css("display", "none");
        $(".t_kwzx_jz_img").css("display", "block");

        setTimeout(function () {
            $.get("http://192.168.1.24:3000/guid/new", function (data) {
                console.log(data);
                data.forEach(function (val) {
                    var html = `  <div class="t_kwzx_div">
            <img src="${val.img}">
            <div class="t_kwzx_js t_kw_js">
            ${val.text}
            </div>
            <p class="t_kwzx_js t_kw_js" style="margin-top: 0px;"></p>
            <ul class="clearfix">
                <li class="t_kwzx_li2"><img src="./images/reply.png" alt=""> ${val.like} </li>
                <li class="t_kwzx_li3"> <img src="./images/zan.png" alt=""> ${val.words} </li>
            </ul>
            <div><img src="./images/listbg.jpg" alt=""></div>
        </div>`
                    $(".t_gl_sj").append(html);
                });
            }, 'json');
            $(".t_kwzx_jz_div").css("display", "block");
            $(".t_kwzx_jz_img").css("display", "none");
        }, 3000);

    });

    $(".t_kwzx_jz2").click(function () {
        $(".t_kwzx_jz_div2").css("display", "none");
        $(".t_kwzx_jz_img2").css("display", "block");

        setTimeout(function () {
            $.get("http://192.168.1.24:3000/guid/hot", function (data) {
                console.log(data);
                data.forEach(function (val) {
                    var html = `  <div class="t_kwzx_div">
            <img src="${val.img}">
            <div class="t_kwzx_js t_kw_js">
            ${val.text}
            </div>
            <p class="t_kwzx_js t_kw_js" style="margin-top: 0px;"></p>
            <ul class="clearfix">
                <li class="t_kwzx_li2"><img src="./images/reply.png" alt=""> ${val.like} </li>
                <li class="t_kwzx_li3"> <img src="./images/zan.png" alt=""> ${val.words} </li>
            </ul>
            <div class="t_dh"><img src="./images/listbg.jpg" alt=""></div>

        </div>`
                    $(".t_gl_sj2").append(html);
                });
            }, 'json');
            $(".t_kwzx_jz_div2").css("display", "block");
            $(".t_kwzx_jz_img2").css("display", "none");
        }, 3000)
    });



    $(".t_kw_qh").click(function () {
        $(".t_boxkw_li").css("display", "block");
        $(".t_boxkw_li2").css("display", "none");
        $(".t_boxkw_li3").css("display", "none");
        console.log(1)

    });
    $(".t_kw_qh2").click(function () {
        $(".t_boxkw_li").css("display", "none");
        $(".t_boxkw_li2").css("display", "block");
        $(".t_boxkw_li3").css("display", "none");
        console.log(2)


    });



})();