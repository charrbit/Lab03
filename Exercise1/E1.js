function validate() {
  let firstPass = document.getElementById('initialPass');
  let secondPass = document.getElementById('secondPass');

  if (firstPass.value != secondPass.value) {
    alert("Passwords do not match!");
  }
  else if (firstPass.value.length < 8) {
    alert("Password must be at least 8 characters!");
  }
}
