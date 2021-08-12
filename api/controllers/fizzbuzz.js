exports.fizzbuzz_get = (req, res, next) => {
    const count = req.params.count || process.env.count;
    const {fizzBuzz_Get} = require("../models/fizzbuzz");
    fizzBuzz_Get(count)
    .then(response => {
        const outputResponse = {
            message:"Successfully get fizzbuzz data",
            count:count,
            data:response
        }
      res.status(200).json(outputResponse);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err.message
      });
    });
};




