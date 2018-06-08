const express = require('express');
const path = require('path');
const process = require('process');

const nutritionApi = require('./routes/nutrition');

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/nutrition', nutritionApi);

app.get('/', (req, res) => res.render('index'));

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'));
