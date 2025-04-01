function validateForm() {
    let firstName = document.forms["signupForm"]["firstName"].value;
    let lastName = document.forms["signupForm"]["lastName"].value;
    let email = document.forms["signupForm"]["email"].value;
    let sex = document.querySelector('input[name="sex"]:checked');
    
    if (firstName === "" || lastName === "" || email === "" || !sex) {
        alert("Please fill in all required fields.");
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}