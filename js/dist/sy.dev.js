"use strict";

(function () {
  var arr = [];
  $(".t_sy_jz").click(function () {
    $(".t_sy_jz_div").css("display", "none");
    $(".t_sy_jz_img").css("display", "block");
    setTimeout(function () {
      $.get("http://192.168.1.94:3000/useing/public", function (data) {
        console.log(data);
        data.forEach(function (val) {
          var html = "     <div class=\"t_syqb_div\">\n                    <img src=".concat(val.img, " alt=\"\">\n                    <div class=\"t_syqb_bq\">").concat(val.info_ty, "</div>\n                    <p>").concat(val.text, "\n                    </p>\n                    <div class=\"t_syqb_tai\"><span>2032</span><span>").concat(val.num, "\u53F0</span></div>\n                    <div class=\"t_syqb_rs\"><span>").concat(val.totalnum, "</span>\u7533\u8BF7</div>\n                    <div class=\"t_syqb_ts\">\u5269\u4F59\u65F6\u95F4\u4E24\u5929</div>\n                </div>");
          $(".t_sy_sj").append(html);
        });
      }, 'json');
      $(".t_sy_jz_div").css("display", "block");
      $(".t_sy_jz_img").css("display", "none");
    }, 2000);
  });
  $(".t_sy_jz2").click(function () {
    $(".t_sy_jz_div2").css("display", "none");
    $(".t_sy_jz_img2").css("display", "block");
    setTimeout(function () {
      $.get("http://192.168.1.94:3000/useing/public", function (data) {
        console.log(data);
        arr = data;
        arr.forEach(function (val) {
          var html = "     <div class=\"t_syqb_div\">\n                    <img src=".concat(val.img, " alt=\"\">\n                    <div class=\"t_syqb_bq\">").concat(val.info_ty, "</div>\n                    <p>").concat(val.text, "\n                    </p>\n                    <div class=\"t_syqb_tai\"><span>2032</span><span>").concat(val.num, "\u53F0</span></div>\n                    <div class=\"t_syqb_rs\"><span>").concat(val.totalnum, "</span>\u7533\u8BF7</div>\n                    <div class=\"t_syqb_ts\">\u5269\u4F59\u65F6\u95F4\u4E24\u5929</div>\n                </div>");
          $(".t_sy_sj2").append(html);
        });
      }, 'json');
      $(".t_sy_jz_div2").css("display", "block");
      $(".t_sy_jz_img2").css("display", "none");
    }, 0.1);
  });
  $(".t_sy_jz3").click(function () {
    $(".t_sy_jz_div3").css("display", "none");
    $(".t_sy_jz_img3").css("display", "block");
    setTimeout(function () {
      $.get("http://192.168.1.94:3000/useing/public", function (data) {
        console.log(data);
        arr = data;
        arr.forEach(function (val) {
          var html = "     <div class=\"t_syqb_div\">\n                    <img src=".concat(val.img, " alt=\"\">\n                    <div class=\"t_syqb_bq\">").concat(val.info_ty, "</div>\n                    <p>").concat(val.text, "\n                    </p>\n                    <div class=\"t_syqb_tai\"><span>2032</span><span>").concat(val.num, "\u53F0</span></div>\n                    <div class=\"t_syqb_rs\"><span>").concat(val.totalnum, "</span>\u7533\u8BF7</div>\n                    <div class=\"t_syqb_ts\">\u5269\u4F59\u65F6\u95F4\u4E24\u5929</div>\n                </div>");
          $(".t_sy_sj3").append(html);
        });
      }, 'json');
      $(".t_sy_jz_div3").css("display", "block");
      $(".t_sy_jz_img3").css("display", "none");
    }, 0.1);
  });
  $(".t_sy_jz4").click(function () {
    $(".t_sy_jz_div4").css("display", "none");
    $(".t_sy_jz_img4").css("display", "block");
    setTimeout(function () {
      $.get("http://192.168.1.94:3000/useing/public", function (data) {
        console.log(data);
        arr = data;
        arr.forEach(function (val) {
          var html = "     <div class=\"t_syqb_div\">\n                    <img src=".concat(val.img, " alt=\"\">\n                    <div class=\"t_syqb_bq\">").concat(val.info_ty, "</div>\n                    <p>").concat(val.text, "\n                    </p>\n                    <div class=\"t_syqb_tai\"><span>2032</span><span>").concat(val.num, "\u53F0</span></div>\n                    <div class=\"t_syqb_rs\"><span>").concat(val.totalnum, "</span>\u7533\u8BF7</div>\n                    <div class=\"t_syqb_ts\">\u5269\u4F59\u65F6\u95F4\u4E24\u5929</div>\n                </div>");
          $(".t_sy_sj4").append(html);
        });
      }, 'json');
      $(".t_sy_jz_div4").css("display", "block");
      $(".t_sy_jz_img4").css("display", "none");
    }, 0.1);
  });
  $.get("http://192.168.1.94:3000/useing/master", function (data) {
    console.log(data);
    arr = data;
    arr.forEach(function (val) {
      var html = "     <div class=\"t_syqb_div\">\n            <img src=".concat(val.img, " alt=\"\">\n            <div class=\"t_syqb_bq\">").concat(val.info_ty, "</div>\n            <p>").concat(val.text, "\n            </p>\n            <div class=\"t_syqb_tai\"><span>2032</span><span>").concat(val.num, "\u53F0</span></div>\n            <div class=\"t_syqb_rs\"><span>").concat(val.totalnum, "</span>\u7533\u8BF7</div>\n            <div class=\"t_syqb_ts\">\u5269\u4F59\u65F6\u95F4\u4E24\u5929</div>\n        </div>");
      $(".t_sy_tysj").append(html);
    });
  }, 'json');
  $(".t_sy_flli").click(function () {
    $(".t_sy_li").css("display", "block");
    $(".t_sy_li2").css("display", "none");
    $(".t_sy_li3").css("display", "none");
    $(".t_sy_li4").css("display", "none");
  });
  $(".t_sy_flli2").click(function () {
    $(".t_sy_li").css("display", "none");
    $(".t_sy_li2").css("display", "block");
    $(".t_sy_li3").css("display", "none");
    $(".t_sy_li4").css("display", "none");
  });
  $(".t_sy_flli3").click(function () {
    $(".t_sy_li").css("display", "none");
    $(".t_sy_li2").css("display", "none");
    $(".t_sy_li3").css("display", "block");
    $(".t_sy_li4").css("display", "none");
  });
  $(".t_sy_flli4").click(function () {
    $(".t_sy_li").css("display", "none");
    $(".t_sy_li2").css("display", "none");
    $(".t_sy_li3").css("display", "none");
    $(".t_sy_li4").css("display", "block");
  });
  $(".t_sy_qh").click(function () {
    $(".t_sy_Box").css("display", "block");
    $(".t_sy_Box2").css("display", "none");
  });
  $(".t_sy_qh2").click(function () {
    $(".t_sy_Box").css("display", "none");
    $(".t_sy_Box2").css("display", "block");
  });
  $(".t_sy_fllis").click(function () {
    $(".t_sy_lis").css("display", "block");
    $(".t_sy_lis2").css("display", "none");
    $(".t_sy_lis3").css("display", "none");
    $(".t_sy_lis4").css("display", "none");
  });
  $(".t_sy_fllis2").click(function () {
    $(".t_sy_lis").css("display", "none");
    $(".t_sy_lis2").css("display", "block");
    $(".t_sy_lis3").css("display", "none");
    $(".t_sy_lis4").css("display", "none");
  });
  $(".t_sy_fllis3").click(function () {
    $(".t_sy_lis").css("display", "none");
    $(".t_sy_lis2").css("display", "none");
    $(".t_sy_lis3").css("display", "block");
    $(".t_sy_lis4").css("display", "none");
  });
  $(".t_sy_fllis4").click(function () {
    $(".t_sy_lis").css("display", "none");
    $(".t_sy_lis2").css("display", "none");
    $(".t_sy_lis3").css("display", "none");
    $(".t_sy_lis4").css("display", "block");
  });
})();