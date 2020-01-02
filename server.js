const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();

//middleware
app.use(bodyParser.json());

app.use('/api/restaurant', require('./routes/restaurant'));

connectDB();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
