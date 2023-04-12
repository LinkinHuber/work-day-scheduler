$(function () {

// This is an event listener that listens for the press of a button anywhere on the page and then logs it in the console as 'button clicked' to prove that a button was clicked
      $('button').on('click', function() {
        console.log('button clicked');

// The 'textInput' variable is for any text inputs that are typed into any of the timeblocks and the 'currentHour' variable sees what hour it is
      var textInput = $(this).siblings('.description').val(); 
      var currentHour = $(this).parent().attr('id');

// That info is then saved to localStorage and then its also loged in the console 
      localStorage.setItem(currentHour, textInput);
        console.log(localStorage);
    
  });

// What this does is each individual timeblock (1 for each hour) retrieves any previously inputed information from localStorage and loads it onto the page on refresh  
    $('#hour9 .description').val(localStorage.getItem('hour9'));
    $('#hour10 .description').val(localStorage.getItem('hour10'));
    $('#hour11 .description').val(localStorage.getItem('hour11'));
    $('#hour12 .description').val(localStorage.getItem('hour12'));
    $('#hour13 .description').val(localStorage.getItem('hour13'));
    $('#hour14 .description').val(localStorage.getItem('hour14'));
    $('#hour15 .description').val(localStorage.getItem('hour15'));
    $('#hour16 .description').val(localStorage.getItem('hour16'));
    $('#hour17 .description').val(localStorage.getItem('hour17')); 

// Fetches the current hour using dayjs
    var hourNow = dayjs().hour();

// This is a loop that loops over all of the timeblocks and then logs both the hour in the timeblock and the current hour to the console
    $('.time-block').each(function () {
        var hourTimeBlock = parseInt($(this).attr('id').split('hour')[1]);
          console.log( hourTimeBlock, hourNow);

// This takes the hours in each of the timeblocks and the current hour (present) and then depending on what hour it actually is changes the rest of the timeblocks (found in the html) to either past or future using if and else if statements which are then reflected on the page by a color either grey, red, or green (found in the css) 
        if (hourTimeBlock < hourNow) {
            $(this).addClass('past');
            $(this).removeClass('future');
            $(this).removeClass('present');
        }
        else if (hourTimeBlock === hourNow) {
            $(this).removeClass('past');
            $(this).addClass('present');
            $(this).removeClass('future');
        }
        else {
            $(this).removeClass('present');
            $(this).removeClass('past');
            $(this).addClass('future');
        }
    });
}); 

// This function uses dayjs to display the current date and time on the page in real time
function refreshTime(){
  setInterval(function (){
     var currentTime = dayjs()
     $('#currentDay').text(currentTime.format('dddd, MMMM D, YYYY h:mm A'));
   }, 1000);
 }

// Calls the 'refreshTime' function above
 refreshTime();