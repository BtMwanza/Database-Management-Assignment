/* Verify user input */
function validate() {
  var employeeID = document.getElementById("employeeID");
  var password = document.getElementById('password');

  if(employeeID.value.trim() == "" || password.value.trim() == ""){
    alert("No blank values allowed")
    return false;
  }
  else{
    return true;
  }

  /*  evt = (evt) ? evt : window.event
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 75)) {
      status = "This field accepts numbers only."
      return false
    }else{
      status = ""
      return true
    } */

}

/*function iD(){
  var managerCode = "MGR";

  var code = 00;
  var locationCode = code.toString();

  var lastDigits = 0000;
  var number = lastDigits.toString();

  var employeeID = managerCode.concat(locationCode,number);

}*/
