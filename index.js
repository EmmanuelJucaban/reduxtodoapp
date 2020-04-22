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
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reduxTodo', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

app.listen(PORT);
