describe('Comparisons', function() {
    let comparison

    beforeEach(function() {
        comparison = 'nok'
    })

    it('should be OK if boolean if true', function() {
        const value = true
        if (value) {
            comparison = 'ok'
        } 
        expect(comparison).toBe('ok')
    })

    it('should be OK if boolean false is negated', function() {
        const value = false
        if (!value) {
            comparison = 'ok'
        }
        expect(comparison).toBe('ok')
    })

    it('shoulbe be OK if var is undefined', function(){
        let value
        if (!value) {
            comparison = 'ok'
        }
        expect(comparison).toBe('ok')
    })

    it('should be OK if var is null', function() {
        const value = null
        if (!value) {
            comparison = 'ok'
        }
        expect(comparison).toBe('ok')
    })

    it('should be OK if string is empty', function() {
        const value = ''
        if (!value) {
            comparison = 'ok'
        }
        expect(comparison).toBe('ok')
    })

    it('should be OK if number is 0', function(){
        const value = 0
        if (!value) {
            comparison = 'ok'
        }
        expect(comparison).toBe('ok')
    })

    it('should be OK if number is NaN', function(){
        const value = NaN
        if (!value) {
            comparison = 'ok'
        }
        expect(comparison).toBe('ok')
    })
})