function validate(input) {
    if (input === 'a') {
        return true
    }
}

describe('Function', function() {
    it(' should return true if "a"', function () {
        expect(validate('a')).toBeTrue()
    })

    // it(' should return false if not "a"', function () {
    //     expect(validate('b')).toBeFalse()
    // })
})