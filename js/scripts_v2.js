$(document).ready(function() {
  let isAdult = false;
  let isFemale = false;
  $("#quiz").submit(function(event) {
    console.log('form#quiz is firing');
    event.preventDefault();
    var age = parseInt($("input#age").val());
    var gender = ($("#gender").val());
    console.log(gender);
    var color = ($("input#color").val());
    var pet = ($("input#pet").val());
    var music = ($("input#music").val());
    isAdult = myAdult(age);
    isFemale = myGender(gender);
    if(!isAdult){
      $('.container').find('#date4').show();
      return;
    }
    if(isFemale){
      $('#date').show();
    }else{
      $('#date3').show();
    }



    if (age) {
      if ((age >= 18 && gender === "female") && (color === "red" || "blue" || "yellow") && (pet === "dog" || "cat" || "alligator") && (music === "rock" || "classics" || "alternative") ) {
        $('#date').show();
      } else if ( color === true &&
      pet === true && music === true)  {
        $('#date2').show();
      } else if (age >= 18 && gender === "male" && color === true &&
      pet === true && music === true) {
        $('#date3').show();
      } else {
        $('#date4').show();
      }

  });
  function myAdult(age){
    if(age >= 18){
      return true;
    }else{
      return false;
    }
  };
  function myGender(gender){
    if(gender === 'female'){
      return true;
    }else{
      return false;
    }
  };

});
