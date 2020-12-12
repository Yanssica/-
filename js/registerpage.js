$(function() {
    //表单验证
    //手机号
    $('input[name="phone"]').blur(function() {
        if (/^1[3-9]\d{9}$/.test(this.value)) {
            layer.tips('验证通过', '.num', {
                tips: [3, 'green'],
                time: 1000,
            })

        } else {
            layer.tips('验证不通过', '.num', {
                tips: [3, 'red'],
                time: 1000,
            })
        }
    });
    //密码
    $('input[name="password"]').focus(function() {
        layer.tips('长度在8-20个字符之间', '.pwd', {
            tips: [3, 'black'],
            time: 1000,
        })
    });
    $('input[name="password"]').blur(function() {
        if (/^\w{6,10}$/.test(this.value)) {
            layer.tips('验证通过', '.pwd', {
                tips: [3, 'green'],
                time: 1000,
            })
        } else {
            layer.tips('密码格式有误', '.pwd', {
                tips: [3, 'red'],
                time: 1000,
            })
        }
    })
})

//短信验证
var num = 59;
var timer = null;
$(".l_hqyzm").click(function() {
    timer = setInterval(function() {
        if (num >= 0) {
            $(".l_hqyzm").text('(' + num + ')' + '秒后重新发送')
            $(".l_hqyzm").prop("disabled", "disabled");
            --num;
        } else {
            clearInterval(timer)
            $(".l_hqyzm").text('获取验证码')
            $(".l_hqyzm").removeProp("disabled");
            num = 59
        }
    }, 1000)
})