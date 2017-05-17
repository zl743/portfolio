var donationForm = document.querySelector('form');

function validateForm(e) {
  var nameField = document.querySelectorAll('input')[0];
  var emailField = document.querySelectorAll('input')[1];
  var emailLabel = document.querySelectorAll('label')[1];
  var nameValid, emailValid;

  if (nameField.value == null || nameField.value == '') {
    nameValid = false;
  } else {
    nameValid = true;
  }

  if (emailField.value == null || emailField.value == '') {
    emailValid = false;
  } else if (emailField.value.indexOf('@') == -1) {
    emailValid = false;
  } else {
    emailLabel.textContent = 'Email';
    emailValid = true;
  }

  if (nameValid == false || emailValid == false) {
    e.preventDefault();
	alert("Your message didn't go through. Make sure that you are entering a valid email address and name.");
  }
  else {
	  alert("Your message has been received. Thank you!") };
  console.log(nameValid);
  console.log(emailValid);
  console.log(emailField);
  console.log(nameField);
}

donationForm.addEventListener('submit', validateForm, false);
