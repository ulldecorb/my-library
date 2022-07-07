const express = require('express');
// const chalk = require('chalk');

const app = express();

const port = process.env.PORT || 8080;

// app.listen(port, () => console.log(`${chalk.cyan('Server run on port ')} ${port}`));
app.listen(port, () => console.log(`Server run on port ${port}`));
