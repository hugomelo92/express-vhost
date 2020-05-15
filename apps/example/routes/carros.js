const express = require('express');
const router = express.Router();

const CarrosController = require('../controllers/CarrosController');

router.get('/carros/', (req, res) => {
  const instance = new CarrosController();
  instance.get(req, res);
});

router.get('/carros/:id', (req, res) => {
  const instance = new CarrosController();
  instance.find(req, res);
});

router.post('/carros/', (req, res) => {
  const instance = new CarrosController();
  instance.store(req, res);
});

router.put('/carros/:id', (req, res) => {
  const instance = new CarrosController();
  instance.update(req, res);
});

router.delete('/carros/:id', (req, res) => {
  const instance = new CarrosController();
  instance.destroy(req, res);
});

module.exports = router;