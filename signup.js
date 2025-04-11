document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.querySelector('.signup-form');
    const loadingScreen = document.querySelector('.loading-screen');

    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const studentId = document.querySelector('input[type="text"]').value;
            const email = document.querySelector('input[type="email"]').value;
            const password = document.querySelector('input[type="password"]').value;

            // Basic validation
            if (!studentId || !email || !password) {
                alert('Please fill in all fields');
                return;
            }

            // Show loading screen
            if (loadingScreen) {
                loadingScreen.classList.add('active');
            }

            // Simulate signup process (replace with actual authentication later)
            setTimeout(() => {
                console.log('Sign up successful!');
                window.location.href = 'dashboard.html';
            }, 2000);
        });

        // Add password toggle functionality
        const passwordToggle = document.querySelector('.password-toggle');
        const passwordInput = document.querySelector('input[type="password"]');

        if (passwordToggle && passwordInput) {
            passwordToggle.addEventListener('click', function() {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);
                this.classList.toggle('fa-eye');
                this.classList.toggle('fa-eye-slash');
            });
        }
    }
});