var events = {};

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


$(".9btn").on("click", function() {
    console.log("9 am");
})
$(".10btn").on("click", function() {
    console.log("10 am");
})
$(".save-btn").on("click", function () {
    //change it so that it saves the text for specific hour codes
    saveEvents(eventText);
});

function saveEvents() {
    //save events to localStorage
    localStorage.setItem("events", JSON.stringify(events));
};

var loadEvents = function () {
    //display events stored in localStorage
    events = JSON.parse(localStorage.getItem("events"));

    if (!events) {
        events = {
            hrcode: [],
            name: [],
        };
    };
};

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