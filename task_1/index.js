const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send(
    'Homework 73, Task 1. Pass a message as a path parameter to get it echoed back to you.'
  );
});

app.get('/:msg', (req, res) => {
  res.send(req.params.msg);
});

app.listen(port, () => {
  console.log('Listening on http://localhost:' + port);
});
