//手机号

$(function() {
    //表单验证
    //手机号
    var tz = false;
    $('input[name="phone"]').focus(function() {
        if ($(this).val() == "") {
            layer.tips('手机号不能为空', '.num', {
                tips: [3, 'black'],
                time: 3000,
            })
        }

    });
    $('input[name="phone"]').blur(function() {
        if (/^1[3-9]\d{9}$/.test($(this).val())) {
            layer.tips('验证通过', '.num', {
                tips: [3, 'green'],
                time: 1000,

            })
            tz = true
        } else {
            layer.tips('格式不正确', '.num', {
                tips: [3, 'red'],
                time: 1000,
            })
            tz = false;
        }
        return tz;
    });
    //图片验证码
    $('input[name="tupian"]').focus(function() {
        if ($(this).val() == "") {
            layer.tips('验证码不能为空', '.tpyzm', {
                tips: [3, "black"],
                time: 1000,

            })
        }

    });
    $('input[name="tupian"]').blur(function() {
            if ($(this).val() == "r2B7") {
                layer.tips("验证通过", '.tpyzm', {
                    tips: [3, 'green'],
                    time: 1000,
                })
                tz = true
            } else {
                layer.tips('验证码错误', '.tpyzm', {
                    tips: [3, 'red'],
                    time: 1000,
                })
                tz = false
            }
            return tz;
        })
        //用户名
    $("input[name='username']").focus(function() {
        if ($(this).val() == "") {
            layer.tips('用户名不能为空', '#user', {
                tips: [3, 'black'],
                time: 1000,
            })
            tz = false
        } else if ($(this).val() == "admin") {
            layer.tips('验证通过', '#user', {
                tips: [3, 'green'],
                time: 1000,
            })
            tz = true
        } else if ($(this).val() != "admin") {
            layer.tips("用户名错误", "#user", {
                tips: [3, 'red'],
                time: 1000,
            })
            tz = false
        }
        return tz

    });
    // $('input[name="username"]').blur(function() {
    //     if (/(?!^([a-zA-Z]+|\d+|[_]+)$)^[\w~!_?]{5,15}$|^1[3-9]\d{9}$/.test($(this).value)) {
    //         layer.tips('验证通过', '#user', {
    //             tips: [3, 'green'],
    //             time: 1000,
    //         })
    //         tz = true
    //     } else {
    //         layer.tips('验证不通过', '#user', {
    //             tips: [3, 'red'],
    //             time: 1000,
    //         })
    //         tz = false
    //     }
    //     return tz;
    // });

    //密码
    $('input[name="pwd"]').focus(function() {
        if ($(this).val() == "") {
            layer.tips('密码不能为空', '#pass', {
                tips: [3, 'black'],
                time: 1000,
            })
        }

    });
    $('input[name="pwd"]').blur(function() {
        if ($(this).val() == "123456") {
            layer.tips('验证通过', '#pass', {
                tips: [3, 'green'],
                time: 1000,
            })
            tz = true
        } else {
            layer.tips('密码格式有误', '#pass', {
                tips: [3, 'red'],
                time: 1000,
            })
            tz = false;
        }
        return tz;
    })


    //确认新密码
    $("input[name='rePasswords']").blur(function() {
        //console.log($('input[name="pwd"]').val())
        if ($('input[name="pwd"]').val() == $(this).val()) {
            layer.tips('验证通过', "#repass", {
                tips: [3, 'green'],
                time: 1000,
            })
            tz = true;
        } else if ($('input[name="pwd"]').val() != $(this).val()) {
            layer.tips('密码不一致 请重新输入', '#repass', {
                tips: [3, 'red'],
                time: 1000,
            })
            tz = false;
        }
        return tz;
    })

    //短信验证
    var num = 59;
    var timer = null;
    $(".l_hqyzm").click(function() {
        timer = setInterval(function() {
            if (num >= 0) {
                $(".l_hqyzm").text(num + '秒后重新发送');
                $(".l_hqyzm").prop("disabled", true);
                num--;
            } else {
                $(".l_hqyzm").text('重新发送');
                $(".l_hqyzm").prop('disabled', false);
                clearInterval(timer);
                num = 59;
            }
        }, 1000)
    });
    //注册按钮
    $(".l_ljzc").click(function() {
        if (tz == true) {
            location = "index.html";
        } else if (tz == false) {
            alert("格式错误")
        }
    });
});