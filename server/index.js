require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const issues = require('./routes/api/issues');

app.use('/api/issues', issues);

const port = process.env.API_PORT || 8080;

app.listen(port, () => console.log(`Server started on port ${port}`));
