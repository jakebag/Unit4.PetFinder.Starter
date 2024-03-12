// import the pets array from data.js
const pets = require('./data'); 

// init express app
const express = require('express'); 
const app = express(); 

const PORT = 8080; 

// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file
    // Pseudocode:
    // 1. Serve the public folder as a static index.html file
});

// hello world route
app.get('/api', (req, res) => {
    // Pseudocode:
    // 1. Respond with "Hello World!" as a string
    res.send('Hello World!');
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    // Pseudocode: 
    // 1. Retrieve all pets from the database
    // 2. Send the retrieved pets as a response

    // send the pets array as a response
    res.json(pets);
});

// get pet by owner with query string
app.get('/api/v1/pets/owner', (req, res) => {
    // Pseudocode: 
    // 1. Extract the owner's name from the request query
    // 2. Search for the pet with the corresponding owner's name in the pets array
    // 3. Send the found pet as a response
});

// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    // Pseudocode: 
    // 1. Extract the pet's name from the request parameters
    // 2. Search for the pet with the corresponding name in the pets array
    // 3. Send the found pet as a response
});

// Start the server
// Pseudocode:
// 1. Start the server and listen for incoming requests on the specified port
app.listen(PORT, () => {
    // Pseudocode:
    // 1. Log a message indicating that the server is listening on the specified port
    console.log('Server is listening on port ' + PORT);
});

// Export the Express app
// Pseudocode:
// 1. Export the Express application to make it available for other modules
module.exports = app;