$(function () {
    $(".button").on("click", function () {
        var data = $(this).siblings("textarea").val()
        var time = $(this).parent().attr("id")
        console.log(data, time)
        localStorage.setItem(time, data);
    })

$ ("#08 textarea").val(localStorage.getItem("08"))
$ ("#09 textarea").val(localStorage.getItem("09"))
$ ("#10 textarea").val(localStorage.getItem("10"))
$ ("#11 textarea").val(localStorage.getItem("11"))
$ ("#12 textarea").val(localStorage.getItem("12"))
$ ("#13 textarea").val(localStorage.getItem("13"))
$ ("#14 textarea").val(localStorage.getItem("14"))
$ ("#15 textarea").val(localStorage.getItem("15"))
$ ("#16 textarea").val(localStorage.getItem("16"))
$ ("#17 textarea").val(localStorage.getItem("17"))
// $ ("#hour8 textarea").val(localStorage.getItem("hour8"))

    $("#currentDay").append(
        dayjs().format("MMM DD, YYYY"))
    $("#currentHour").append(
        dayjs().format("HH:MM"))
    
    var currentHour = dayjs().hour()
    
    $(".hour").each(function(){
        var id = $(this).attr("id")

    if (id < currentHour) {
            $(this).addClass("past")
        } else if (id == currentHour) {
            $(this).addClass("present")
        } else {
            $(this).addClass("future")
        }
    })

    
});

