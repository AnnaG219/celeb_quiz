$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var age = parseInt($("input#age").val());
    var gender = ($("#gender").val());
    var color = ($("#color").val());
    var pet = ($("#pet").val());
    var music = ($("#music").val());

    // if (age) {
      if (age >= 18 && gender === "female") {
        $('#date').show();
      } else if ( age <= 18 && gender === "female")  {
        $('#date2').show();
      } else if (age >= 18 && gender === "male") {
        $('#date3').show();
      } else {
        $('#date4').show();
      }


  });
});
