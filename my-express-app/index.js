const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Home Page');
});
app.get('/about', (req, res) => {
  res.send('This is the About Page');
});

app.get('/contact', (req, res) => {
  res.send('This is the Contact Page');
});


app.get('/user', (req, res) => {
  const userId = req.params.id;
  res.send(`User profile for ID: ${userId}`);
});

app.post('/submit', (req, res) => {
  res.send('Form submitted successfully!');
});

app.put('/update', (req, res) => {
  res.send('Information updated successfully!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
