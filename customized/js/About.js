//Get Internet IP Script
$.getJSON("https://ipinfo.io", function (response) {

    $("#myip").html(response.ip);
})

function LoveMessenger() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: '感謝您的支持',
        text: '我已經用心接受到您傳達的心意囉！',
        showConfirmButton: false,
        timer: 2000,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
    })
}

function ShowTime() {
    var NowDate = new Date();
    var d = NowDate.getDay();
    var dayNames = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    document.getElementById('showbox').innerHTML = '系統目前時間：' + NowDate.toLocaleString() + '（' + dayNames[d] + '）';
    setTimeout('ShowTime()', 1);
}