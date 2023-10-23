$(function () {
    $(".button").on("click", function () {
        var data = $(this).siblings("textarea").val()
        var time = $(this).parent().attr("id")
        console.log(data, time)
        localStorage.setItem(time, data);
    })

$ ("#hour8 textarea").val(localStorage.getItem("hour8"))
$ ("#hour9 textarea").val(localStorage.getItem("hour9"))
$ ("#hour10 textarea").val(localStorage.getItem("hour10"))
$ ("#hour11 textarea").val(localStorage.getItem("hour11"))
$ ("#hour12 textarea").val(localStorage.getItem("hour12"))
$ ("#hour13 textarea").val(localStorage.getItem("hour13"))
$ ("#hour14 textarea").val(localStorage.getItem("hour14"))
$ ("#hour15 textarea").val(localStorage.getItem("hour15"))
$ ("#hour16 textarea").val(localStorage.getItem("hour16"))
$ ("#hour17 textarea").val(localStorage.getItem("hour17"))
// $ ("#hour8 textarea").val(localStorage.getItem("hour8"))

    $("#currentDay").append(
        dayjs().format("MMM DD, YYYY"))
    var currentHour = dayjs().hour()
    for (var i = 9; i <= 17; i++) {
        var id = "hour-" + i
        var data = localStorage.getItem(id)
        $("#" + id).children("textarea").val(data)
        if (i < currentHour) {
            $("#" + id).addClass("past")
        } else if (i === currentHour) {
            $("#" + id).addClass("present")
        } else {
            $("#" + id).addClass("future")
        }
    }
});