const express = require('express');
const cors = require('cors');
const process = require('process');

const nutritionApi = require('./routes/nutrition');
const exerciseApi = require('./routes/exercise');
const measurementsApi = require('./routes/measurements');
const generalInformationApi = require('./routes/generalInformation');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/nutrition', nutritionApi);
app.use('/exercise', exerciseApi);
app.use('/measurements', measurementsApi);
app.use('/general-information', generalInformationApi);

app.listen(process.env.PORT || 3000, () => console.log('my-calorie-counter API is listening on port 3000'));
