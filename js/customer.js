$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1000)
            $('div.go-top').show();
        else
            $('div.go-top').hide();
    });
    $('div.go-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1000);
    });
});

function CheckIsNullOrEmpty(value) {
    //正则表达式用于判斷字符串是否全部由空格或换行符组成
    var reg = /^\s*$/
    //返回值为true表示不是空字符串
    return (value != null && value != undefined && !reg.test(value))
}

function getnotice() {
    var noticeUri = "/api/kms/getnoticelist"
    $.ajax({
        type: "get",
        url: noticeUri,
        dataType: "json",
        async: true,
        cache: false,
        contentType: 'application/json',
        timeout: 2000,
        success: function (data) {
            var pHtml = "";
            if (data.length > 0) {
                document.getElementById("noticeList").style.display = "";//显示
                var num = 1;
                for (i in data) {
                    pHtml += "<p>" + num + ". " + data[i]["title"] + " 通知时间: " + data[i]["create_time"] + "</p>";
                    num += 1
                }
                $('#notice').append(pHtml);
            }
        },
        error: function (e) {
            console.log('error...');
        }

    });
}

getnotice()