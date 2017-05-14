$(document).ready(function() { 
  $("#calcbutton").on("click", function(event) {
    
    var age = $("#age").val();
    var weight = $("#weight").val();
    var height = $("#height").val();
    var parent = document.getElementById("response");
    var gender = $('input[name=radioName]:checked', '#infoForm').val();
    submitOK = "true";
    
      if (isNaN(age) || age < 15 || age > 85) {
        alert("Age between 15 and 85");
        submitOK = "false";
      }
      if (submitOK == "false") {
        return false;
      }
    
      if (gender == 1) {
          var male = 10 * weight + 6.25 * height - 5 * age + 5
          parent.innerHTML = "Calories per day: " + 1 * male + "<br>";
    
      } else {
          var female = 10 * weight + 6.25 * height - 5 * age - 161
          parent.innerHTML = "Calories per day: " + 1 * female + "<br>";
 
      }    
  });
});  