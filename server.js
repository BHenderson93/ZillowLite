const express = require('express')
const path = require('path')
const app = express()

app.use('/api/homes', require('./routes/R-homes.js'))

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  const port = 3000;
  app.listen(port, function () {
    //create transient db here
    console.log(`Express app running on port ${port}`);
  });