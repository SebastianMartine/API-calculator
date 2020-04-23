const { validationResult } = require("express-validator");

const sumOperator = (param1, param2) => (+param1) + (+param2);
const multOperator = (param1, param2) => (+param1) * (+param2);
const restOperator = (param1, param2) => (+param1) - (+param2);
const divOperator = (param1, param2) => (+param1) / (+param2);

exports.sum = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const err = new Error('Error');
        err.statusCode = 500;
        err.data = errors.array();
        throw err;
    }

    const sum = sumOperator(+req.body.paramone, +req.body.paramtwo);

    const params = {
        body: req.body,
        result: sum
    }

    try {
        res.status(201).json({ message: 'sum', params });
    } catch (err) {

        const error = new Error('Error');
        error.statusCode = 500;
        error.data = err;
        throw error;
    }
}

exports.rest = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const err = new Error('Error');
        err.statusCode = 500;
        err.data = errors.array();
        throw err;
    }

    const rest = restOperator(+req.body.paramone, +req.body.paramtwo);

    const params = {
        body: req.body,
        result: rest
    }

    try {
        res.status(201).json({ message: 'rest', params });
    } catch (err) {

        const error = new Error('Error');
        error.statusCode = 500;
        error.data = err;
        throw error;
    }
}

exports.mul = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const err = new Error('Error');
        err.statusCode = 500;
        err.data = errors.array();
        throw err;
    }

    const mul = multOperator(+req.body.paramone, +req.body.paramtwo);

    const params = {
        body: req.body,
        result: mul
    }

    try {
        res.status(201).json({ message: 'mul', params });
    } catch (err) {

        const error = new Error('Error');
        error.statusCode = 500;
        error.data = err;
        throw error;
    }
}

exports.div = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const err = new Error('Error');
        err.statusCode = 500;
        err.data = errors.array();
        throw err;
    }

    
    const div = divOperator(+req.body.paramone, +req.body.paramtwo);


    

        const params = {
            body: req.body,
            result: div
        }

        try {
            res.status(201).json({ message: 'div', params });
        } catch (err) {

            const error = new Error('Error');
            error.statusCode = 500;
            error.data = err;
            throw error;
        }
    

}