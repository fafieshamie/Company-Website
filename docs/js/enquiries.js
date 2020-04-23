function validateForm() {
	var uname = document.enquiries.userid;

	var uid = document.enquiries.userid;
	var phone = document.enquiries.phone;
	var email = document.enquiries.email;
	var enquiries = document.enquiries.enquiries

	var check_letter = /^[A-Za-z]+$/;
	var numbers = /^[0-9]+$/;
	var emails_fmt = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   var check =  /^[A-Za-z. ]+$/;
	
	if (!uname.value.match(check_letter)) {
		alert(" Name must have alphabet characters only and it should not be empty!");
		uname.focus();
		
	} else if(!enquiries.value.match(check)) {
		alert("Please enter what you want to enquire about.This section can not be empty!");
		enquiries.focus();
		
	} else if (!phone.value.match(numbers)) {
		alert("Please enter your phone number and it should have numbers only!");
		phone.focus();
		
	} else if (!email.value.match(emails_fmt)) {
		alert("Please enter a valid email!");
		email.focus();
		return false;
		
	} else {
		alert("Successful! form has been submitted.");
	}
}
function submitForm() {
	console.log("Successful! form has been submitted.");
}
