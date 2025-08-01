
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!--from Mamun DevOps School!');
});

module.exports = app;

if (require.main === module) {
  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });
}

