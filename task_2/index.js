const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;

const app = express();
const port = 8000;

const password = 'hotramen';

app.get('/', (req, res) => {
  res.send(
    'Homework 73, Task 2. There are two endpoints: encode and decode. Pass a message as a path parameter to them to get it encoded/decoded.'
  );
});

app.get('/encode', (req, res) => {
  res.send(
    'This is the encode endpoint. Pass the message as path parameter to get it encoded.'
  );
});

app.get('/encode/:msg', (req, res) => {
  res.send(Vigenere.Cipher(password).crypt(req.params.msg));
});

app.get('/decode', (req, res) => {
  res.send(
    'This is the decode endpoint. Pass the message as path parameter to get it decoded.'
  );
});

app.get('/decode/:msg', (req, res) => {
  res.send(Vigenere.Decipher(password).crypt(req.params.msg));
});

app.listen(port, () => {
  console.log('Listening on http://localhost:' + port);
});
