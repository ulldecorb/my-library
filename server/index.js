const express = require('express');
const mongoose = require('mongoose');
const chalk = require('chalk');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

mongoose.connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(express.json());

app.use(require('./routes/book.route'));

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

app.listen(port, () => console.log(`${chalk.green('Server run on port ')}${chalk.bgCyan(' ', port, ' ')}`));
