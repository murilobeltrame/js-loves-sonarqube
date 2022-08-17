describe('', function() {

    it (' should concatenate', function() {
        const name = 'Murilo'
        const company = 'AmbevTech'
        expect('My name is ' + name + ' and I work for ' + company)
            .toEqual(`My name is ${name} and I work for ${company}`)
    })
})