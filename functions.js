const { sum, substract } = require('./index')

test('Add two numbers', () => {
    let output = sum(1, 2);
    let result = 3;
    expected(output).toBe(result);
})

test('Substract two numbers', () => {
    let output = substract(2, 1);
    let result = 1;
    expected(output).toBe(result);
})

function expected(output) {

    return {
        toBe(result) {

            if (output !== result) {
                throw new Error(`${output} is not equals to ${result}!`)
            }
        }
    }
}

function test(testTitle, callbackFn) {
    try {
        callbackFn();
        console.log(`Success:` + testTitle)
    } catch (err) {
        console.log(`Error:` + testTitle)
        console.log(err)

    }
}