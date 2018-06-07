const express = require('express');
const path = require('path');

const nutritionApi = require('./routes/nutrition');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.use('/nutrition', nutritionApi);

app.get('/', (req, res) => res.render('index'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
