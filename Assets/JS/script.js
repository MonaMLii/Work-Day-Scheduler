// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//create global variables

var currentDayEl = $('#currentDay');
var taskEl = $('.description');
var clearBtn = $('#clr-btn');
var saveTask = $('.saveBtn');
var saveIcon = $('.fas');
var hour = $('.hour');


//current day display on timeblock

var today = dayjs();
currentDayEl.text(today.format('- dddd, MMMM D, YYYY,  h:mm:ss a -'));


var getThisHr = dayjs();
thisHour = parseInt(getThisHr.format('H'))

console.log(thisHour);

function colorCoded() {
  taskEl.each(function () {
    var hour = parseInt(this.id.split('-')[1]);
    console.log(hour);
    if (thisHour === hour) {
      $(this).addClass('present')
    } else if (thisHour > hour) {
      $(this).addClass('past')
    } else if (thisHour < hour) {
      $(this).addClass('future')
      
    }
    
  })
}

colorCoded();




$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});



//add past present future class to each col


//add all task to localstorage


function storeTask(btnHour) {
  var textVal = $('#text-' + btnHour).val();
  localStorage.setItem('task-' + btnHour, textVal);
}

function showTasks() {
  for (var hr = 9; hr <= 17; hr++) {
    var task = localStorage.getItem('task-' + hr) || '';
    $('#text-' + hr).val(task);
  }
}


//clear field btn to remove all the task in text area
function clearField() {
  localStorage.clear();
  showTasks();
}

showTasks();