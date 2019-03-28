$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = ($("input#gender").val());
    var color = ($("input#color").val());
    var pet = ($("input#pet").val());
    var music = ($("input#music").val());

    // if (age) {
      if (age >= 18 && gender === "female" && color === true &&
      pet === true && music === true) {
        $('#date').show();
      } else if (age >= 18 && gender === "female" && color === true &&
      pet === true && music === true) {
        $('#date2').show();
      } else if (age >= 18 && gender === "male" && color === true &&
      pet === true && music === true) {
        $('#date3').show();
      } else {
        $('#date4').show();
      }

    event.preventDefault();
  });
});
