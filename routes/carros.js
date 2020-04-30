const express = require('express');
const router = express.Router();

const Carro = require('../models/Carro');

router.get('/', (req, res) => {
  Carro.find()
    .then(carros => {
      res.json(carros);
    })
    .catch(error => res.status(500).json(error));
});

router.get('/:id', (req, res) => {
  Carro.findOne({ _id: req.params.id })
    .then(carro => {
      res.json(carro);
    })
    .catch(error => res.status(500).json(error));
});

router.post('/', (req, res) => {
  const novoCarro = new Carro({
    marca: req.body.marca,
    modelo: req.body.modelo
  });

  novoCarro
    .save()
    .then(carro => {
      res.json(carro);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.put('/:id', (req, res) => {
  const novosDados = { marca: req.body.marca, modelo: req.body.modelo };

  Carro.findOneAndUpdate({ _id: req.params.id }, novosDados, { new: true })
    .then(carro => {
      res.json(carro);
    })
    .catch(error => res.status(500).json(error));
});

router.delete('/:id', (req, res) => {
  Carro.findOneAndDelete({ _id: req.params.id })
    .then(carro => {
      res.json(carro);
    })
    .catch(error => res.status(500).json(error));
});

module.exports = router;