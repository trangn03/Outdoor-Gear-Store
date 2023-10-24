// Get the "Subscribe" button and the email input element
const subscribeButton = document.querySelector('.newsletter-form button');
const emailInput = document.querySelector('#newsletter-email');

// Add an event listener to the "Subscribe" button
subscribeButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the email entered by the user
    const userEmail = emailInput.value;

    // Check if the email is valid (you can add more validation)
    if (isValidEmail(userEmail)) {
        alert('Thank you for subscribing!');
        emailInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a valid email address.');
    }
});

// Function to validate email
function isValidEmail(email) {
    // A simple email validation check
    return /\S+@\S+\.\S+/.test(email);
}