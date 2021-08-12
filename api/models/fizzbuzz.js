
const fizzBuzz_Get = async (count) =>{
    const result = [];
    for (let i = 1; i <= count; i++) {
        let printStr = i.toString();
        if (i % 15 === 0) {
            printStr = 'Fizz Buzz';
        } else if ( i % 3 === 0) {
            printStr = 'Fizz'
        } else if (i % 5 === 0) {
            printStr = 'Buzz'
        }
        result.push (printStr);
    }
    return result;
}



module.exports = {fizzBuzz_Get};