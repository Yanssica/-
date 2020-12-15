(function() {
    var dl = false
    $(".l_guanbi").click(function() {
            $(".l_box").css("display", "none")
        })
        //用户名
    $("input[name='phone']").focus(function() {
        if ($(this).val() == "") {
            layer.tips('用户名不能为空', '.num', {
                tips: [3, 'yelow'],
                time: 3000,
            })
            dl = false
        }
        return dl;
    });
    $("input[name='phone']").blur(function() {
        if ($(this).val() == "admin") {
            layer.tips('验证成功', ".num", {
                tips: [3, 'green'],
                time: 3000,
            })
            dl = true
        } else {
            layer.tips('用户名错误', '.num', {
                tips: [3, "red"],
                time: 3000,
            })
            dl = false
        }
        return dl
    });
    $("input[name='Passwords']").focus(function() {
        if ($(this).val() == "") {
            layer.tips('密码不能为空', '#pass', {
                tips: [3, 'black'],
                time: 3000,
            })
            dl = false
        }
        return dl;
    });
    $("input[name='Passwords']").blur(function() {
        if ($(this).val() == "123456") {
            layer.tips('验证成功', "#pass", {
                tips: [3, 'green'],
                time: 3000,
            })
            dl = true
        } else {
            layer.tips('密码错误', '#pass', {
                tips: [3, "red"],
                time: 3000,
            })
            dl = false
        }
        return dl
    });
    // $(".btn").click(function() {
    //     if (dl == true) {
    //         location = "##"
    //     } else {
    //         alert("登录失败")
    //     }
    // })
})();