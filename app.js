require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

// Debugging output
console.log(`PORT: ${process.env.PORT}`);

// Serve static files from the 'public' directory
app.use(express.static('public'))

// Custom 404 page
//app.use((req, res) => {
//  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
//});

// Start the server
const PORT = process.env.PORT || 8080; // Use environment variable or default to 8080
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
