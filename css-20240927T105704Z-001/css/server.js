const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the CMS directory
app.use(express.static(path.join(__dirname, '..', '..', '..')));

// Serve the index.html file for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', '..', 'CMS', 'index.html'));
});

app.post('/book', (req, res) => {
  const { name, email, date } = req.body;
  res.send(`<h1>Thank you, ${name}!</h1><p>Your table is booked for ${date}. We will send a confirmation to ${email}.</p>`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
