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

//Get Internet IP Script
$.getJSON("https://ipinfo.io", function (response) {

    $("#myip").html(response.ip);
})