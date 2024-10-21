//Function to validate form inputs 
function validateForm(event) { event.preventDefault(); 
// Prevent form from submitting 
// Get form inputs 
const name = document.getElementById("name").value; 
const email = document.getElementById("email").value; 
const message = document.getElementById("message").value; 
// Basic validation 
if (name === "" || email === "" || message === "") 
{ alert("Please fill in all fields."); } 
else { 
// If validation is successful, show a success message 
alert(Thank you, ${name}! Your message has been sent.); 
// Optionally, reset the form 
document.querySelector("form").reset(); } } 
// Add event listener to the form 
document.addEventListener("DOMContentLoaded", function () { const form = document.querySelector("form"); form.addEventListener("submit", validateForm); });
