const express = require('express');
const squel = require('squel');

const router = express.Router();

router.get('/', (req, res) => {
  req.databaseConnectionPool
    .connect()
    .then((client) => {
      const query = squel.select()
        .field('id')
        .field('amount')
        .field('created_at')
        .from('nutrition')
        .toString();

      return client.query(query)
        .then(result => res.json(result.rows))
        .catch((err) => {
          console.error(err.stack);
          res.status(500).end();
        })
        .finally((() => client.release()));
    });
});

router.get('/:id', (req, res) => {
  req.databaseConnectionPool
    .connect()
    .then((client) => {
      const excerciseId = req.params.id;

      const query = squel.select()
        .field('id')
        .field('amount')
        .field('created_at')
        .from('nutrition')
        .where('id = ?', excerciseId)
        .toString();

      return client.query(query)
        .then((result) => {
          if (result.rows.length) {
            res.json(result.rows[0]);
          } else {
            res.status(204).end();
          }
        })
        .catch((err) => {
          console.error(err.stack);
          res.status(500).end();
        })
        .finally((() => client.release()));
    });
});

router.post('/', (req, res) => {
  req.databaseConnectionPool
    .connect()
    .then((client) => {
      const { amount, meal_id: mealId } = req.body;

      const query = squel.insert()
        .into('nutrition')
        .set('amount', amount)
        .set('meal_id', mealId)
        .toString();

      return client.query(query)
        .then(result => res.json(result.rows))
        .catch((err) => {
          console.error(err.stack);
          res.status(500).end();
        })
        .finally((() => client.release()));
    });
});

router.post('/:id', (req, res) => {
  req.databaseConnectionPool
    .connect()
    .then((client) => {
      const nutritionId = req.params.id;
      const { amount, meal_id: mealId } = req.body;

      const query = squel.update()
        .table('nutrition')
        .set('amount', amount)
        .set('meal_id', mealId)
        .where('id = ?', nutritionId)
        .toString();

      return client.query(query)
        .then(result => res.json(result.rows))
        .catch((err) => {
          console.error(err.stack);
          res.status(500).end();
        })
        .finally((() => client.release()));
    });
});

module.exports = router;
