document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Clean up previous errors
        clearErrors();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        let valid = true;

        // Name
        if (!name) {
            showError('name', 'Name is required');
            valid = false;
        } else if (name.toLowerCase() === 'ironhack') {
            alert('You cannot be Ironhack, because I am Ironhack.');
            return;
        }

        // Email
        if (!email) {
            showError('email', 'Email is required');
            valid = false;
        } else if (!validateEmail(email)) {
            showError('email', "The email isn't valid");
            valid = false;
        }

        // Phone
        if (!phone) {
            showError('phone', 'Phone is required');
            valid = false;
        } else if (!/^\d{9}$/.test(phone)) {
            showError('phone', 'The phone number must have 9 digits.');
            valid = false;
        }

        // Message
        if (!message) {
            showError('message', 'Message is required.');
            valid = false;
        }

        // If everything is ok, we send the form
        if (valid) {
            form.submit();
        }
    });

    // Email verification
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Function to display errors
    function showError(fieldId, message) {
        const input = document.getElementById(fieldId);
        const errorDiv = document.getElementById(`${fieldId}-error`);
        input.classList.add('input-error');
        errorDiv.textContent = message;
    }

    // Function to clean up all errors
    function clearErrors() {
        const fields = ['name', 'email', 'phone', 'message'];
        fields.forEach(id => {
            document.getElementById(id).classList.remove('input-error');
            document.getElementById(`${id}-error`).textContent = '';
        });
    }

    // Event to clear the error when the field changes
    document.getElementById('name').addEventListener('input', function() {
        clearError('name');
    });
    document.getElementById('email').addEventListener('input', function() {
        clearError('email');
    });
    document.getElementById('phone').addEventListener('input', function() {
        clearError('phone');
    });
    document.getElementById('message').addEventListener('input', function() {
        clearError('message');
    });

    // Function to clear the error when the field is corrected
    function clearError(fieldId) {
        const input = document.getElementById(fieldId);
        const errorDiv = document.getElementById(`${fieldId}-error`);
        if (input.value.trim() !== '') {
            if (fieldId === 'email' && !validateEmail(input.value)) {
                return;
            }
            if (fieldId === 'phone' && !/^\d{9}$/.test(input.value)) {
                return;
            }
            input.classList.remove('input-error');
            errorDiv.textContent = '';
        }
    }
});
