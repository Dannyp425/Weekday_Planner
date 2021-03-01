//date on top
var weekDay = "";
switch (dayjs().day()) {
    case 0:
        weekDay = "Sunday";
        break;

    case 1:
        weekDay = "Monday";
        break;

    case 2:
        weekDay = "Tuesday";
        break;

    case 3:
        weekDay = "Wednesday";
        break;

    case 4:
        weekDay = "Thursday";
        break;

    case 5:
        weekDay = "Friday";
        break;

    case 6:
        weekDay = "Saturday";
        break;
}
var monthDay = dayjs().format("MMMM D");
var currDay = weekDay + ", " + monthDay + "th"
$("#currentDay").text(currDay);

//event manipulation
var events =
    [{
        9: ""
    },
    {
        10: ""        
    },
    {
        11: ""        
    },
    {
        12: ""        
    },
    {
        13: ""        
    },
    {
        14: ""
        
    },
    {
        15: ""
        
    },
    {
        16: ""
        
    },
    {
        17: ""
        
    },
    ];

$(".9btn").on("click", function () {
    var txt = $("#9").val();
    events[9]
    localStorage.set(txt)
});
$(".10btn").on("click", function () {
    var txt = $("#10").val();
    localStorage.set(txt)
});
$(".11btn").on("click", function () {
    var txt = $("#11").val();
    localStorage.set(txt)
});
$(".12btn").on("click", function () {
    var txt = $("#12").val();
    localStorage.set(txt)
});
$(".13btn").on("click", function () {
    var txt = $("#13").val();
    localStorage.set(txt)
});
$(".14btn").on("click", function () {
    var txt = $("#14").val();
    localStorage.set(txt)
});
$(".15btn").on("click", function () {
    var txt = $("#15").val();
    localStorage.set(txt)
});
$(".16btn").on("click", function () {
    var txt = $("#16").val();
    localStorage.set(txt)
});
$(".17btn").on("click", function () {
    var txt = $("#17").val();
    localStorage.set(txt)
});


function colorCode() {
    $("textarea").each(function (index, element) {
        var currHr = dayjs().hour();
        if (element.id < currHr) {
            $(element).addClass("past");
        } else if (element.id == currHr) {
            $(this).addClass("present");
        } else {
            $(element).addClass("future");
        }
    });
}

colorCode();