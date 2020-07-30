let userEmail = documnet.getElementbyId('userEmail').value;
let usePassword = document.getElementById('userPassword').value;

if (userEmail == '') {
  alert('Fail to login');
} else if (usePassword == '') {
  alert('Your account has no Password');
} else {
  alert('Successful');
}
