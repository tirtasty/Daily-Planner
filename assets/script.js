//Global Scope Variable
var currentDay = $('#currentDay');
var dataInput = $('.form-control');
var dataInside = document.getElementsByClassName("hourBlock")
var saveButton = document.querySelectorAll(".saveBtn");
console.log(saveButton)
var realTime = moment();
var inHour = moment().hour();



//Display Real Time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDay.text(rightNow);
    //Color Block Past, present and future based on realtime
    for (var i=0; i < dataInput.length; i++){
      if (inHour > dataInput[i].dataset.hour){
        dataInput[i].classList.add("past")
      }else if(inHour == dataInput[i].dataset.hour){
        dataInput[i].classList.add("present")
      }else{
        dataInput[i].classList.add("future")
      }
    }
  }
setInterval(displayTime, 1000);


// Saving Data Locally to each Column
var saving = $(".saveBtn").on("click", function () {
  console.log(saving);
  var todo = $(this).siblings(".hourBlock").val(); // Select all the sibling that has same class
  var time = $(this).parent().attr("data-hour");

  localStorage.setItem("Hour-" + time, todo);
});

// Rendering data from local storage to display everytime reload
function callData(){
  $(".data1").val(localStorage.getItem("Hour-9"));
  $(".data2").val(localStorage.getItem("Hour-10"));
  $(".data3").val(localStorage.getItem("Hour-11"));
  $(".data4").val(localStorage.getItem("Hour-12"));
  $(".data5").val(localStorage.getItem("Hour-13"));
  $(".data6").val(localStorage.getItem("Hour-14"));
  $(".data7").val(localStorage.getItem("Hour-15"));
  $(".data8").val(localStorage.getItem("Hour-16"));
  $(".data9").val(localStorage.getItem("Hour-17"));
}



//Time Block Realtime
var workHour = moment().startOf('day').add(9, "hours")

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


callData();