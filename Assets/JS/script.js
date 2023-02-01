
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



//colorcoded function with hour of the day
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
