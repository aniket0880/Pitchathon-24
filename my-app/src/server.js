const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse incoming requests
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the "public" directory

// Route to handle login requests
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Perform login logic (authentication, database lookup, etc.)
    if (email === "test@example.com" && password === "password123") {
        res.status(200).send("Login successful!");
    } else {
        res.status(401).send("Invalid credentials.");
    }
});

// Route to handle sign-up requests
app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;

    // Perform sign-up logic (save user to database, validation, etc.)
    res.status(201).send(`User ${name} signed up with email ${email}.`);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
