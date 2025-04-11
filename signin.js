// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get form element
const signinForm = document.getElementById('signinForm');

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const idNumber = document.getElementById('idNumber').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Check if user exists in your database with the ID number
            // You can add additional validation here
            
            // Redirect to dashboard on successful login
            window.location.href = 'navigation.html';
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Check if user is already signed in
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        window.location.href = 'navigation.html';
    }
});