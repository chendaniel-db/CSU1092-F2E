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
