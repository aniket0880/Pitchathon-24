document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // TODO: Add validation, then send a POST request to the server
    console.log("Login data:", { email, password });

    // Example of sending data to a server (you'll need a back-end endpoint):
    // fetch('/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email, password })
    // });
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // TODO: Add validation, then send a POST request to the server
    console.log("Sign-up data:", { name, email, password });

    // Example of sending data to a server (you'll need a back-end endpoint):
    // fetch('/signup', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ name, email, password })
    // });
});
