var currentDay = $('#currentDay');


//Display Real Time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDay.text(rightNow);
  }

setInterval(displayTime, 1000);