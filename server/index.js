const express = require('express');
const path = require('path');
const process = require('process');

const nutritionApi = require('./routes/nutrition');
const exerciseApi = require('./routes/exercise');
const measurementsApi = require('./routes/measurements');
const generalInformationApi = require('./routes/generalInformation');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.use(express.json());

app.use('/nutrition', nutritionApi);
app.use('/exercise', exerciseApi);
app.use('/measurements', measurementsApi);
app.use('/general-information', generalInformationApi);

app.get('/*', (req, res) => res.sendFile('index.html', { root: path.resolve(__dirname, '..', 'dist') }));

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'));
