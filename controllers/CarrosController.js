const Carro = require('../models/Carro');

module.exports = class CarrosController {

    get(req, res) {
      Carro.find()
        .then(carros => {
          res.json(carros);
        })
        .catch(error => res.status(500).json(error));
    };
    
    find(req, res) {
      Carro.findOne({ _id: req.params.id })
        .then(carro => {
          res.json(carro);
        })
        .catch(error => res.status(500).json(error));
    };

    store(req, res) {
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
    }

    update(req, res) {
        const novosDados = { marca: req.body.marca, modelo: req.body.modelo };
    
        Carro.findOneAndUpdate({ _id: req.params.id }, novosDados, { new: true })
        .then(carro => {
            res.json(carro);
        })
        .catch(error => res.status(500).json(error));
    };

    destroy(req, res) {
      Carro.findOneAndDelete({ _id: req.params.id })
        .then(carro => {
          res.json(carro);
        })
        .catch(error => res.status(500).json(error));
    };
}