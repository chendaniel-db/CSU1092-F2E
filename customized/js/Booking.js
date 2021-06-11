function OKMessenger() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: true,
        showCloseButton: true,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
    })

    swalWithBootstrapButtons.fire({
        title: '你確定資料填寫正確嗎?',
        text: '送出後將無法線上做資料更動的作業',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '確定 Save',
        cancelButtonText: '取消 Canale',
        reverseButtons: true,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                '資料已傳送',
                '您的資料已傳送到本公司，將由專人為您服務',
                'success'
            )
        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                '資料尚未傳送',
                '您的資料尚未送出，麻煩您再次嘗試',
                'error'
            )
        }
    })
}
function resetMessenger() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: '您的資料皆已清空',
        showConfirmButton: false,
        timer: 1500,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
    })
}

//Get Internet IP Script
$.getJSON("https://ipinfo.io", function (response) {

    $("#myip").html(response.ip);
})
