function checkUser() {
  if (document.getElementById('username').value == 'guest') {
    if (document.getElementById('passcode').value == '123') {
      alert("You have logged in!");
      // window.location.href = "URL";
    }
    else {
      //alert('Wrong Passcode or Username');
      return false;
    }
  }
}
