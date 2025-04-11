// Firebase configuration
const firebaseConfig = {
    apiKey: "paste-your-actual-api-key-here",
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Check authentication state
firebase.auth().onAuthStateChanged((user) => {
    if (!user && window.location.pathname !== '/signin.html') {
        window.location.href = 'signin.html';
    }
});

// Add logout functionality
document.addEventListener('DOMContentLoaded', () => {
    const logoutLink = document.querySelector('a[href="#"][title="Logout"]');
    if (logoutLink) {
        logoutLink.addEventListener('click', (e) => {
            e.preventDefault();
            firebase.auth().signOut().then(() => {
                window.location.href = 'signin.html';
            }).catch((error) => {
                console.error('Logout Error:', error);
            });
        });
    }
});

// Add this after your existing code
function testSignIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("Sign-in successful!", userCredential.user);
            window.location.href = 'navigation.html';
        })
        .catch((error) => {
            console.error("Sign-in error:", error);
            alert(error.message);
        });
}

// Test user creation function
function testCreateUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("User created successfully!", userCredential.user);
        })
        .catch((error) => {
            console.error("User creation error:", error);
            alert(error.message);
        });
}