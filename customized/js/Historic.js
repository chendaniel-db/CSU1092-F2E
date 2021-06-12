//Get Internet IP Script
$.getJSON("https://ipinfo.io", function (response) {

    $("#myip").html(response.ip);
})