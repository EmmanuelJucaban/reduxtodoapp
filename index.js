const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

const app = express();

// Setup middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Connect database
mongoose.connect(mongoose.connect('mongodb://localhost/reduxtodo', { useNewUrlParser: true, useCreateIndex: true });)

app.listen(PORT);
