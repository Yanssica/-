"use strict";

(function () {
  var arr = [];
  $(".t_kwzx_jz").click(function () {
    $(".t_kwzx_jz_div").css("display", "none");
    $(".t_kwzx_jz_img").css("display", "block");
    setTimeout(function () {
      $.get("http://192.168.1.94:3000/play/new", function (data) {
        console.log(data);
        arr = data;
        arr[0].forEach(function (val) {
          var html = "  <div class=\"t_kwzx_div\">\n            <img src=\"".concat(val.img, "\">\n            <div class=\"t_kwzx_js t_kw_js\">\n            ").concat(val.text, "\n            </div>\n            <p class=\"t_kwzx_js t_kw_js\" style=\"margin-top: 0px;\"></p>\n            <ul class=\"clearfix\">\n                <li class=\"t_kwzx_li\">").concat(val.price, "</li>\n                <li class=\"t_kwzx_li2\"><img src=\"./images/reply.png\" alt=\"\"> ").concat(val.like, " </li>\n                <li class=\"t_kwzx_li3\"> <img src=\"./images/zan.png\" alt=\"\"> ").concat(val.words, " </li>\n            </ul>\n        </div>");
          $(".t_gl_sj").append(html);
        });
      }, 'json');
    }, 3000);
    $(".t_kwzx_jz_img").css("display", "none");
  });
  $(".t_kwzx_jz2").click(function () {
    $(".t_kwzx_jz_div2").css("display", "none");
    $(".t_kwzx_jz_img").css("display", "block");
    setTimeout(function () {
      $.get("http://192.168.1.94:3000/play/hot", function (data) {
        console.log(data);
        arr = data;
        arr[0].forEach(function (val) {
          var html = "  <div class=\"t_kwzx_div\">\n            <img src=\"".concat(val.img, "\">\n            <div class=\"t_kwzx_js t_kw_js\">\n            ").concat(val.text, "\n            </div>\n            <p class=\"t_kwzx_js t_kw_js\" style=\"margin-top: 0px;\"></p>\n            <ul class=\"clearfix\">\n                <li class=\"t_kwzx_li\">").concat(val.price, "</li>\n                <li class=\"t_kwzx_li2\"><img src=\"./images/reply.png\" alt=\"\"> ").concat(val.like, " </li>\n                <li class=\"t_kwzx_li3\"> <img src=\"./images/zan.png\" alt=\"\"> ").concat(val.words, " </li>\n            </ul>\n        </div>");
          $(".t_gl_sj2").append(html);
        });
      }, 'json');
    }, 3000);
    $(".t_kwzx_jz_img").css("display", "none");
  });
  $(".t_kwzx_jz3").click(function () {
    $(".t_kwzx_jz_div3").css("display", "none");
    $(".t_kwzx_jz_img").css("display", "block");
    setTimeout(function () {
      $.get("http://192.168.1.94:3000/play/hot", function (data) {
        console.log(data);
        arr = data;
        arr[0].forEach(function (val) {
          var html = "  <div class=\"t_kwzx_div\">\n            <img src=\"".concat(val.img, "\">\n            <div class=\"t_kwzx_js t_kw_js\">\n            ").concat(val.text, "\n            </div>\n            <p class=\"t_kwzx_js t_kw_js\" style=\"margin-top: 0px;\"></p>\n            <ul class=\"clearfix\">\n                <li class=\"t_kwzx_li\">").concat(val.price, "</li>\n                <li class=\"t_kwzx_li2\"><img src=\"./images/reply.png\" alt=\"\"> ").concat(val.like, " </li>\n                <li class=\"t_kwzx_li3\"> <img src=\"./images/zan.png\" alt=\"\"> ").concat(val.words, " </li>\n            </ul>\n        </div>");
          $(".t_gl_sj3").append(html);
        });
      }, 'json');
    }, 3000);
    $(".t_kwzx_jz_img").css("display", "none");
  });
  $(".t_kw_qh").click(function () {
    $(".t_boxkw_li").css("display", "block");
    $(".t_boxkw_li2").css("display", "none");
    $(".t_boxkw_li3").css("display", "none");
    console.log(1);
  });
  $(".t_kw_qh2").click(function () {
    $(".t_boxkw_li").css("display", "none");
    $(".t_boxkw_li2").css("display", "block");
    $(".t_boxkw_li3").css("display", "none");
    console.log(2);
  });
  $(".t_kw_qh3").click(function () {
    $(".t_boxkw_li").css("display", "none");
    $(".t_boxkw_li2").css("display", "none");
    $(".t_boxkw_li3").css("display", "block");
    console.log(3);
  });
})();