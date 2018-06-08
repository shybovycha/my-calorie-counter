const express = require('express');
const path = require('path');
const process = require('process');
const bodyParser = require('body-parser');

const nutritionApi = require('./routes/nutrition');
const excerciseApi = require('./routes/excercise');
const measurementsApi = require('./routes/measurements');
const settingsApi = require('./routes/settings');
const userApi = require('./routes/user');

const dbConnectionMiddleware = require('./middleware/databaseConnection');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(dbConnectionMiddleware);

app.use('/nutrition', nutritionApi);
app.use('/excercises', excerciseApi);
app.use('/measurements', measurementsApi);
app.use('/user', userApi);
app.use('/settings', settingsApi);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
