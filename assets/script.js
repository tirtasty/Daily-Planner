var currentDay = $('#currentDay');


//Display Real Time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDay.text(rightNow);
  }

setInterval(displayTime, 1000);

// Curent Time
var realTime = moment();
// Curent Time in Hour
var timeHour = moment().hour();

var workHour = moment().startOf('day').add(9, "hours")

//Time Block Realtime
var clock9 = workHour.format('hA');
$(".9am").text(clock9);

var clock10 = workHour.add(1, "h").format('hA');
$(".10am").text(clock10);

var clock11 = workHour.add(1, "h").format('hA');
$(".11am").text(clock11);

var clock12 = workHour.add(1, "h").format('hA');
$(".12pm").text(clock12);

var clock13 = workHour.add(1, "h").format('hA');
$(".1pm").text(clock13);

var clock14 = workHour.add(1, "h").format('hA');
$(".2pm").text(clock14);

var clock15 = workHour.add(1, "h").format('hA');
$(".3pm").text(clock15);

var clock16 = workHour.add(1, "h").format('hA');
$(".4pm").text(clock16);

var clock17 = workHour.add(1, "h").format('hA');
$(".5pm").text(clock17);

