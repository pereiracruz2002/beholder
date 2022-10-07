const express = require('express');
require('express-async-errors');
const cors = require('cors');
const helmet = require('helmet');
const authMiddleware = require('./middlewares/authMiddleware');

const authController =require('./controllers/authController')
const settingsController = require('./controllers/settingsController'); 

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.post('/login',authController.doLogin);

app.post('/logout',authController.doLogout);

app.get('/settings',authMiddleware, settingsController.getSettings);


const errorMiddleware = require('./middlewares/errorMiddleware');
app.use(errorMiddleware);

module.exports = app;