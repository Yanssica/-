"use strict";

$(function () {
  $(".currur1").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".second").fadeIn();
    $(".first").fadeOut();
  });
  $(".currur2").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".first").fadeIn();
    $(".second").fadeOut();
  });
  $(".zan").click(function () {
    $(".zan>img").toggleClass("active");

    if ($(".zan>img").hasClass("active")) {
      $(".zan-span").html(4);
    } else {
      $(".zan-span").html(3);
    }
  });
  $(".t_rq_jz").click(function () {
    $(".t_rq_jz_div").css("display", "none");
    $(".t_rq_jz_img").css("display", "block");
    setTimeout(function () {
      console.log(2);
      $.get("http://192.168.1.24:3000/report/new", function (data) {
        console.log(data);
        arr = data;
        arr.forEach(function (val) {
          var html = "   <li>\n                    <div class=\"first-one\">\n                        <img src=".concat(val.img, " alt=\"\">\n                        <div class=\"showdow\">\n                            <div class=\"showdow-top\">").concat(val.text, "</div>\n                            <div class=\"showdow-bottom\">\n                                <div class=\"jlt1\">\n                                    <img src=\"./img/icon.png\" alt=\"\">\n\n                                </div>\n                                <p class=\"showdow-bottom-p\">").concat(val.uName, "</p>\n                                <span class=\"showdow-bottom-span\">").concat(val.endTime, "</span>\n                                <div class=\"zan\">\n                                    <img src=\"./img/icon.png\" alt=\"\">\n                                </div>\n                                <span class=\"zan-span\">\n                                    3\n                                </span>\n                                <div class=\"liuyan\">\n                                    <img src=\"./img/reply.png\" alt=\"\">\n                                </div>\n                                <span class=\"liuyan-span\">\n                                    3\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                </li>");
          $(".t_sj_ui").append(html);
        });
      }, 'json');
      $(".t_rq_jz_div").css("display", "block");
      $(".t_rq_jz_img").css("display", "none");
    }, 1000);
  });
  $(".t_rq_jz2").click(function () {
    $(".t_rq_jz_div2").css("display", "none");
    $(".t_rq_jz_img2").css("display", "block");
    setTimeout(function () {
      console.log(2);
      $.get("http://192.168.1.24:3000/report/new", function (data) {
        console.log(data);
        arr = data;
        arr.forEach(function (val) {
          var html = "   <li>\n                    <div class=\"first-one\">\n                        <img src=".concat(val.img, " alt=\"\">\n                        <div class=\"showdow\">\n                            <div class=\"showdow-top\">").concat(val.text, "</div>\n                            <div class=\"showdow-bottom\">\n                                <div class=\"jlt1\">\n                                    <img src=\"./img/icon.png\" alt=\"\">\n\n                                </div>\n                                <p class=\"showdow-bottom-p\">").concat(val.uName, "</p>\n                                <span class=\"showdow-bottom-span\">").concat(val.endTime, "</span>\n                                <div class=\"zan\">\n                                    <img src=\"./img/icon.png\" alt=\"\">\n                                </div>\n                                <span class=\"zan-span\">\n                                    3\n                                </span>\n                                <div class=\"liuyan\">\n                                    <img src=\"./img/reply.png\" alt=\"\">\n                                </div>\n                                <span class=\"liuyan-span\">\n                                    3\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                </li>");
          $(".t_sj_ui2").append(html);
        });
      }, 'json');
      $(".t_rq_jz_div2").css("display", "block");
      $(".t_rq_jz_img2").css("display", "none");
    }, 1000);
  });
});