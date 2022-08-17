function sum (a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

describe('Calculations', function() {
    it(' when summing 1 and 2 should return 3', function() {
        expect(sum(1, 2)).toBe(3)
    })

    it(' whne subtracting 3 and 2 should return 1', function() {
        expect(subtract(3,2)).toBe(1)
    })
})