var events = {};
var hour = ["9", "10", "11", "12", "13", "14", "15", "16", "17", "20"]
var weekDay =  "";
    switch(dayjs().day()) {
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

var eventText = $(" input[type=text][name=9am] ").val();

$(".save-btn").on("click", function() {
    //change it so that it saves the text for specific hour codes
    saveEvents(eventText);
});

function saveEvents () {
    //save events to localStorage
    localStorage.setItem("events", JSON.stringify(events));
};

var loadEvents = function() {
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
    //use input name to check against current hour
}