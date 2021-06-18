var time = 3;
var i = 0;

function Redirect() {
    window.location = "Cominsoon.html";
}

function ulogin() {
    var userName = document.getElementById("uName").value;
    var userPass = document.getElementById("uPass").value;


    if (userPass == "guest" && userName == "csudemo") {
        document.getElementById("logininfo").innerHTML = "登入成功 即將導向內部系統";
        timer = setTimeout('Redirect()', time * 1000);
    }

    else if (userName == "" || userName == null) {
        document.getElementById("logininfo").innerHTML = "使用者名稱不能為空";
        return false;
    }

    else if (userPass == "" || userPass == null) {
        document.getElementById("logininfo").innerHTML = "使用者密碼不能為空";
        return false;
    }

    else if (userPass != "guest" || userName != "csudemo") {
        document.getElementById("logininfo").innerHTML = "使用者名稱或密碼錯誤";
        return false;
    }

    else {
        return true;
    }
}
function f5() {
    window.location.reload()
}

$.getJSON("https://ipinfo.io", function (response) {
    $("#mycity").html(response.city);
    $("#myregion").html(response.region);
    $("#myip").html(response.ip);
})

function ShowTime() {
    var NowDate = new Date();
    var d = NowDate.getDay();
    var dayNames = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    document.getElementById('showbox').innerHTML = '系統目前時間：' + NowDate.toLocaleString() + '（' + dayNames[d] + '）';
    setTimeout('ShowTime()', 1);
}

function Tips() {
    Swal.fire({
        title: 'ERP SSO 企管單簽測試',
        text: '帳號：csudemo 密碼：guest',
        confirmButtonText: '關閉',
        showCloseButton: true,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
        imageWidth: 200,
        imageHeight: 200,
        timer: 5000,
        footer: '這則通知將於 5 秒後自動關閉 或 手動點擊按鈕進行關閉',
    })
}