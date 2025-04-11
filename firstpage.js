document.addEventListener('DOMContentLoaded', function() {
    // Make body scrollable but hide scrollbar
    document.body.style.overflow = 'auto';
    document.body.style.scrollbarWidth = 'none';  // Firefox
    document.body.style.msOverflowStyle = 'none';  // IE/Edge
    
    // Add webkit scrollbar styling
    const style = document.createElement('style');
    style.textContent = `
        ::-webkit-scrollbar {
            display: none;
        }
    `;
    document.head.appendChild(style);
    // Login functionality
    const studentBtn = document.querySelector('.portal-btn:nth-child(1)');
    const facultyBtn = document.querySelector('.portal-btn:nth-child(2)');
    const loginSection = document.querySelector('.login-section');
    const overlay = document.querySelector('.overlay');
    const backBtn = document.querySelector('.back-btn');
    const loginForm = document.querySelector('.login-form');
    const imageSection = document.querySelector('.image-section');
    const loadingScreen = document.querySelector('.loading-screen');

    function showLogin() {
        loginSection.classList.add('active');
        overlay.classList.add('active');
        setTimeout(() => {
            loginForm.classList.add('active');
        }, 300);
        imageSection.classList.add('fade');
        
        // Add active class to the clicked button
        if (this === studentBtn) {
            studentBtn.classList.add('active');
            facultyBtn.classList.remove('active');
        } else {
            facultyBtn.classList.add('active');
            studentBtn.classList.remove('active');
        }
    }

    function hideLogin() {
        loginForm.classList.remove('active');
        setTimeout(() => {
            loginSection.classList.remove('active');
            overlay.classList.remove('active');
            imageSection.classList.remove('fade');
        }, 300);
    }

    studentBtn.addEventListener('click', showLogin);
    facultyBtn.addEventListener('click', showLogin);
    backBtn.addEventListener('click', hideLogin);
    overlay.addEventListener('click', hideLogin);

    // Password visibility toggle
    const passwordToggles = document.querySelectorAll('.password-toggle');
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const input = this.previousElementSibling;
            const type = input.getAttribute('type');
            input.setAttribute('type', type === 'password' ? 'text' : 'password');
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    });

    // Form submission
    const loginFormElement = document.querySelector('.login-form');
    loginFormElement.addEventListener('submit', function(e) {
        e.preventDefault();
        loadingScreen.classList.add('active');
        
        // Check if student or faculty login
        const isStudentLogin = document.querySelector('.portal-btn:nth-child(1)').classList.contains('active');
        
        setTimeout(() => {
            if (isStudentLogin) {
                window.location.href = 'dashboardforstudent.html';
            } else {
                window.location.href = 'dashboardforfaculty.html';
            }
        }, 2000);
    });

    // Smooth scroll for About Us section
    const aboutLink = document.querySelector('a[href="#about"]');
    const aboutSection = document.querySelector('.about-us-section');

    aboutLink.addEventListener('click', function(e) {
        e.preventDefault();
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Animation for about cards on scroll
    const aboutCards = document.querySelectorAll('.about-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.5 });

    aboutCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });

    // Contact section functionality
    const contactLink = document.querySelector('.contact-link');
    const contactSection = document.querySelector('.contact-section');
    const contactBackBtn = document.querySelector('.contact-back-btn');
    
    if (contactLink) {
        contactLink.addEventListener('click', function(e) {
            e.preventDefault();
            contactSection.classList.add('active');
            overlay.classList.add('active');
            
            // Get the navbar height for offset
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            
            // Calculate the position with additional offset for better positioning
            const contactPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
            
            // Smooth scroll
            window.scrollTo({
                top: contactPosition,
                behavior: 'smooth'
            });
            
            // Activate animations after scrolling
            setTimeout(() => {
                contactSection.classList.add('active');
                document.querySelector('.contact-container').classList.add('active');
                document.querySelector('.contact-form').classList.add('active');
                document.querySelector('.contact-image').classList.add('active');
            }, 500);
        });
    }

    if (contactBackBtn) {
        contactBackBtn.addEventListener('click', function() {
            contactSection.classList.remove('active');
            overlay.classList.remove('active');
            document.querySelector('.contact-container').classList.remove('active');
            document.querySelector('.contact-form').classList.remove('active');
            document.querySelector('.contact-image').classList.remove('active');
        });
    }

    // Contact form input styling
    const contactInputs = document.querySelectorAll('.contact-form input[type="text"], .contact-form input[type="email"]');
    contactInputs.forEach(input => {
        input.style.color = '#000000';
    });

    // Signup functionality
    const signupLink = document.querySelector('.signup-text a');
    const signupSection = document.querySelector('.signup-section');
    const signupForm = document.querySelector('.signup-form');
    const loginLinkBtn = document.querySelector('.login-link-btn');
    const signupBackBtn = document.querySelector('.signup-section .back-btn');

    function showSignup() {
        loginSection.classList.remove('active');
        signupSection.classList.add('active');
        setTimeout(() => {
            signupForm.classList.add('show');
        }, 300);
    }

    function hideSignup() {
        signupForm.classList.remove('show');
        setTimeout(() => {
            signupSection.classList.remove('active');
            overlay.classList.remove('active');
            imageSection.classList.remove('fade');
        }, 300);
    }

    signupLink.addEventListener('click', showSignup);
    signupBackBtn.addEventListener('click', hideSignup);
    loginLinkBtn.addEventListener('click', function() {
        signupSection.classList.remove('active');
        loginSection.classList.add('active');
    });

    // Password visibility toggle for signup form
    const signupPasswordToggles = document.querySelectorAll('.signup-section .password-toggle');
    signupPasswordToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const input = this.previousElementSibling;
            const type = input.getAttribute('type');
            input.setAttribute('type', type === 'password' ? 'text' : 'password');
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    });

    // Forgot password functionality
    const forgotPasswordLink = document.querySelector('.forgot-password');
    const forgotPasswordSection = document.querySelector('.forgot-password-section');
    const forgotPasswordForm = document.querySelector('.forgot-password-form');
    const forgotPasswordBackBtn = document.querySelector('.forgot-password-section .back-btn');
    
    function showForgotPassword() {
        loginSection.classList.remove('active');
        forgotPasswordSection.classList.add('active');
        setTimeout(() => {
            forgotPasswordForm.classList.add('show');
        }, 300);
        // Remove the image fade
        imageSection.classList.remove('fade');
    }
    
    function hideForgotPassword() {
        forgotPasswordForm.classList.remove('show');
        setTimeout(() => {
            forgotPasswordSection.classList.remove('active');
            overlay.classList.remove('active');
        }, 300);
    }
    
    forgotPasswordLink.addEventListener('click', showForgotPassword);
    forgotPasswordBackBtn.addEventListener('click', hideForgotPassword);
    
    // Return to login from forgot password
    const forgotPasswordLoginLink = document.querySelector('.forgot-password-section .login-link-btn');
    forgotPasswordLoginLink.addEventListener('click', function() {
        forgotPasswordSection.classList.remove('active');
        loginSection.classList.add('active');
        // Add image fade back when returning to login
        imageSection.classList.add('fade');
    });
});
