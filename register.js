function s() {
  let pass = document.getElementById("pass").value;
  let pass2 = document.getElementById("pass2").value;
  var email = document.sign.email;
  var phone = document.sign.phone;
  var fullname = document.sign.fullname;
  if (allLetters(fullname)) {
    if (pass_validation(pass)) {
      if (pass2_validation(pass, pass2)) {
        if (mobile_validation(phone)) {
          if (email_validation(email)) {
            alert("signup successfull");
            document.getElementById("sign").action = "signup.php";
          }
        }
      }
    }
  }
}

function pass_validation(pass) {
  var p = pass.length;

  if (p <= 7) {
    alert("minimum length for password is 8");

    return false;
  } else {
    return true;
  }
}
function pass2_validation(pass, pass2) {
  if (pass2 == pass) return true;
  else {
    alert("passwords should match");
    return false;
  }
}
function mobile_validation(mobile) {
  var phoneno = /^\d{10}$/;
  if (mobile.value.match(phoneno)) {
    return true;
  } else {
    alert("Enter valid phone number");
    return false;
  }
}
function email_validation(email) {
  var mail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  if (email.value.match(mail)) {
    return true;
  } else {
    alert("Enter Valid Email Address");
    email.focus();
    return false;
  }
}

function allLetters(name) {
  var letters = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
  if (name.value.match(letters)) {
    return true;
  } else {
    alert("Enter only  Alphabets");
    fname.focus();
    return false;
  }
}
