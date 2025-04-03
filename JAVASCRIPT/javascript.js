$(document).ready(function () {
    $("#button").click(function () {
        $("#span").fadeIn("slow");
    });
});
function fact() {
    let fact = document.getElementById("funfact")
    fact.style.display = "Block";
}
function show() {
    let show = document.getElementById("hide")
    show.style.display = "block";
}
$(document).ready(function() {
  
    // Click handler for submit button
    $('#submitBtn').click(function() {
        let isValid = true;
 
        // Name validation
        const name = $('#name').val();
        if (name === "") {
            showError('name', 'Name is required');
            isValid = false;
        }
 
        // Email validation
        const email = $('#email').val();
        if (email === '') {
            showError('email', 'Email is required');
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showError('email', 'Please enter a valid email');
            isValid = false;
        }
 
        // Phone validation
        const phone = $('#contact_number').val();
        if (phone === '') {
            showError('contact_number', 'Phone number is required');
            isValid = false;
        } else if (!/^\+356\d{8}$/.test(phone)) {
            showError('contact_number', 'Format: +356 followed by 8 digits');
            isValid = false;
        }
 
        // Message validation
        const message = $('#message').val();
        if (message === '') {
            showError('message-error', 'Message is required');
            isValid = false;
        } else if (message.length < 10) {
            showError('message-error', 'Minimum 10 characters required');
            isValid = false;
        }
 
        // Form submission
        if (isValid) {
            alert('Thank you! Your message has been sent.');
        }
    });
});