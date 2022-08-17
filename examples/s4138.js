describe('For', function() {

    const expectedFruit = {name:'Banana'}
    const array = [{name:'Apple'}, expectedFruit, {name: 'Avocado'}, {name:'Strawberry'}, {name:'Orange'}]

    it(' should found "Banana" in the array old way', function() {
        let foundFruit;
        for (let i = 0; i < array.length; i++) {
            const fruit = array[i];
            if (fruit.name === expectedFruit.name) {
                foundFruit = fruit
            }
        }
        expect(foundFruit).toBe(expectedFruit)
    })

    it(' should found "Banana" in the array better way', function() {
        let foundFruit;
        for (let fruit of array) {
            if (fruit.name === expectedFruit.name) {
                foundFruit = fruit
            }
        }
        expect(foundFruit).toBe(expectedFruit)
    })

    it(' should found "Banana" in the array even better way', function() {
        let foundFruit = array.filter(fruit => fruit.name == expectedFruit.name)[0];
        expect(foundFruit).toBe(expectedFruit)
    })
})