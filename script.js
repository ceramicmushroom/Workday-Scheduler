let saveBtn = document.querySelector('.saveBtn');
let currTime = dayjs().$H; // current time in hours
let textArea = document.getElementsByClassName('.description');
const today = dayjs();
$('#currentDay').text(dayjs().format('dddd MMMM D, YYYY'));
// jquery finds the element, places it according the ID inside parenthesis, formats it into text 


 // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in DONE

$(function () { // this is the jquery wrapper, makes sure code doesnt run until the DOM is ready
  const timeBlock = document.querySelectorAll('.time-block');
  timeBlock.forEach(block=>{
    const timeBlockHour = block.getAttribute('id').split('-'); //splitting it at the dash so it creates two different strings
    // going through all the divs with a class of time-block and getting their id. all of the ids have a specific hour attached to them. we can link this to the current time through dayjs
    if (parseInt(timeBlockHour[1]) < currTime) { //parseInt takes only the integer from the string that was separated and compares it to the current time currTime. if the integer of timeblock hour is less than the current time, add a class of "past"
      block.classList.add('past'); //adding the class of past
    }
    else if (parseInt(timeBlockHour[1]) > currTime) {
      block.classList.add('future'); //adding the class of future
    }
    else {
      block.classList.add('present'); //adding the class of present
    }


  })
});

  $(document).ready(function () {
    
    $('.saveBtn').on('click', function (events) { // targeting the save button class. on the click, run this function
      events.preventDefault(); // prevents refresh
      const text = $(this).siblings('.description').val(); // "this" refers to the save button click. this save button sibling. grabbing the value of the text input
      const hour = $(this).parent().attr('id'); // grabbing the save buttons parent, looking at the attribute id. that way we know who input what in which hour by the id in that div
      localStorage.setItem(hour, text); //setting the hour and text to local storage
    });
  });

  window.onload = function loadContent() { //grabbing the content from local storage and loading it on the page
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10.description").val(localStorage.getItem("hour-10"));
    $("#hour-11.description").val(localStorage.getItem("hour-11"));
    $("#hour-12.description").val(localStorage.getItem("hour-12"));
    $("#hour-13.description").val(localStorage.getItem("hour-13"));
    $("#hour-14.description").val(localStorage.getItem("hour-14"));
    $("#hour-15.description").val(localStorage.getItem("hour-15"));
    $("#hour-16.description").val(localStorage.getItem("hour-16"));
    $("#hour-17.description").val(localStorage.getItem("hour-17"));
  }