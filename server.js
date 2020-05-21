const express = require('express');
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');

// Connect Database
connectDB();

app.use(cors());

// Init Middleware
app.use(express.json({ extended: false }));

// Define Route
app.use('/api/todos', require('./route/api/todos'));

// Serve static assets if in Production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 4040;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server started on port ${PORT}`);
  }
});
