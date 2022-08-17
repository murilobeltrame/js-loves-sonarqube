describe('Array', function() {
    it(' should be created with an item number "3.5"', function() {
        // const array = new Array('3.5')
        // const array = new Array(3.5)
        const array = [3.5]
        expect(array).toEqual([3.5])
        expect(array).toContain(3.5)
    })
})