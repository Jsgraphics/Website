// scripts.js

// Example: Form validation
document.querySelector('form[name="contact"]').addEventListener('submit', function(e) {
    e.preventDefault();
    // Example: Basic form validation
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name && email && message) {
        // Optionally, submit form data using fetch or AJAX
        alert('Form submitted successfully!');
        this.reset();
    } else {
        alert('Please fill out all fields.');
    }
});
