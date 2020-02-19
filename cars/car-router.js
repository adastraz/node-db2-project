const express = require('express');

const db = require('../data/dbConfig');

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(err => {
            console.log('something failed', err)
        })
})

router.get('/:car_id', (req, res) => {
    db('cars').where({ car_id: req.params.id })
    .first()
        .then(car => {
            res.status(200).json(car)
        })
        .catch(err => { 
            console.log('something went wrong', err)
            res.status(500).json({ message: 'failed' })
        })
})

router.post('/', validateCar, (req, res) => {
    db('cars').insert(req.body, 'car_id')
        .then(car => {
            res.status(201).json(car)
        })
        .catch(err => { 
            console.log('something went wrong', err)
            res.status(500).json({ message: 'failed' })
        })
})

function validateCar(req, res, next) {
    console.log(`middleware validate project ${req.body.make} ${req.body.model}`)
    if(!req.body.make || !req.body.model){
        res.status(400).json({ message: 'Car does not have a make or a model' })
    }else{
      next()
    }
}

module.exports = router