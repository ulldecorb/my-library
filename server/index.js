const express = require('express');
const chalk = require('chalk');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => console.log(`${chalk.green('Server run on port ')}${chalk.bgCyan(' ', port, ' ')}`));
