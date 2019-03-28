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
        $('#date2').hide();
        $('#date3').hide();
        $('#date4').hide();
        $('#date').show();
      } else if ( age <= 18 && gender === "female")  {
        $('#date').hide();
        $('#date3').hide();
        $('#date4').hide();
        $('#date2').show();
      } else if (age >= 18 && gender === "male") {
        $('#date2').hide();
        $('#date').hide();
        $('#date4').hide();
        $('#date3').show();
      } else {
        $('#date2').hide();
        $('#date3').hide();
        $('#date').hide();
        $('#date4').show();
      }


  });
});
