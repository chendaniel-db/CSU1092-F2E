function Tips() {
    Swal.fire({
        title: '貼心小提醒',
        text: '防疫新生活，共同來對抗新冠肺炎，共同創造美好生活',
        confirmButtonText: '關閉',
        showCloseButton: true,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
        imageUrl: 'image/sweetalert2/giphy.gif',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: '貼心小提醒GIF',
        timer: 5000,
        footer: '這則通知將於 5 秒後自動關閉 或 手動點擊按鈕進行關閉',
    })
}


$.getJSON("https://ipinfo.io", function (response) {


    $("#mycity").html(response.city);
    $("#myregion").html(response.region);
    $("#myip").html(response.ip);
})

function ShowTime()
        {
            var NowDate = new Date();
            var d = NowDate.getDay();
            var dayNames = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
            document.getElementById('showbox').innerHTML = '系統目前時間：' + NowDate.toLocaleString() + '（' + dayNames[d] + '）';
            setTimeout('ShowTime()', 1);
        }