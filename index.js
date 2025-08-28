// Function to scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Function to filter destinations based on search input
function filterDestinations() {
    const input = document.getElementById('destinationSearch').value.toLowerCase();
    const cards = document.querySelectorAll('#destinationCards .destination-card');

    cards.forEach(card => {
        const title = card.querySelector('.location').textContent.toLowerCase();
        const price = card.querySelector('.price').textContent.toLowerCase();
        if (title.includes(input) || price.includes(input)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// Function to validate registration form
function validateRegistration(event) {
    event.preventDefault();
    const form = event.target;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // If valid, submit the form (for demonstration, we will just log to console)
    console.log("Registration successful:", {
        fullName: form.fullName.value,
        email: form.email.value,
    });
    form.reset();
}

// Function to validate contact form
function validateContact(event) {
    event.preventDefault();
    const form = event.target;

    // If valid, submit the form (for demonstration, we will just log to console)
    console.log("Contact message sent:", {
        name: form.contactName.value,
        email: form.contactEmail.value,
        subject: form.contactSubject.value,
        message: form.contactMessage.value,
    });
    form.reset();
}

// Function to show login form (to be implemented)
function showLogin() {
    alert("Login functionality to be implemented.");
}
