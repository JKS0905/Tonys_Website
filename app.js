require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8080;

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Custom 404 page
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});