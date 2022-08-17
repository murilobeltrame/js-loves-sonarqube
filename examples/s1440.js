describe('Comparison operator', function() {
    let comparison

    beforeEach(function() {
        comparison = 'nok'
    })

    it(' should be OK when comparing values but not types', function() {
        const a = '1'
        const b = 1
        if (a == b) {
            comparison = 'ok'
        }
        expect(comparison).toBe('ok')
    })

    it(' should be NOK when comparing values and types', function() {
        const a = '1'
        const b = 1
        if (a === b) {
            comparison = 'ok'
        }
        expect(comparison).toBe('nok')
    })
})