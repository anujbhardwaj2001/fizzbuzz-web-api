const express = require("express");
const router = express.Router();
const FizzBuzzController = require('../controllers/fizzbuzz');
const {validateParams} = require('../middleware/params_middleware');
const paramList = [];
paramList.push ( {
    param_key: 'count',
    required: true,
    type: 'number',
    validator_functions: [(param) => {return param > 0}]    
})

router.get("/", validateParams(paramList), FizzBuzzController.fizzbuzz_get);

router.get("/:count", validateParams(paramList), FizzBuzzController.fizzbuzz_get);

module.exports = router;