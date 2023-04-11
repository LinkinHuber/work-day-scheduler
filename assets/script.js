$(function () {

// This function uses dayjs to display the current date and time on the page in real time
  function refreshTime(){
    setInterval(function (){
       var currentTime = dayjs()
       $('#currentDay').text(currentTime.format('dddd, MMMM D, YYYY h:mm A'));
     }, 1000);
   }

// Calls the 'refreshTime' function up above
   refreshTime();

// This is a jquery event listener that listens for the press of a button anywhere on the page and then logs it in the console as 'button clicked' to prove that a button was clicked
      $( 'button' ).on( 'click', function() {
        console.log('button clicked');

// The 'textInput' variable... and the 'currentHour' variable...
      var textInput = $(this).siblings('.description').val(); 
      var currentHour = $(this).parent().attr('id');

// Saves the 2 above variables to local storage and then logs it to the console 
      localStorage.setItem(currentHour, textInput);
        console.log(localStorage);
    
    });

//  
    $('#hour-9 .description').val(localStorage.getItem('hour9'));
    $('#hour-10 .description').val(localStorage.getItem('hour10'));
    $('#hour-11 .description').val(localStorage.getItem('hour11'));
    $('#hour-12 .description').val(localStorage.getItem('hour12'));
    $('#hour-13 .description').val(localStorage.getItem('hour13'));
    $('#hour-14 .description').val(localStorage.getItem('hour14'));
    $('#hour-15 .description').val(localStorage.getItem('hour15'));
    $('#hour-16 .description').val(localStorage.getItem('hour16'));
    $('#hour-17 .description').val(localStorage.getItem('hour17'));
    $('#hour-18 .description').val(localStorage.getItem('hour18'));

// This function takes the current hour and then compares it to the time on each timeblock to see whether that specific time is in the past, present, or future which then the timeblock background color is chnaged to either grey, red, or green to reflect that
  function whatHourIsIt() {
    
// Used dayjs to fetch the current hour
    var hourNow = dayjs().hour();

// 
    $('.time-block').each(function () {
        var hourTimeBlock = parseInt($(this).attr('id').split('hour')[1]);
          console.log( hourTimeBlock, hourNow)

        
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
    })
  }

// Calls the 'whatHourIsIt' function up above
  whatHourIsIt();
}); 