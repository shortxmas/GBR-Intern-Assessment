import express from 'express';

// Create Express app
const app = express();

// Define home route
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});