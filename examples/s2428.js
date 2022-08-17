describe('Object declaration', function() {
    it(' should match', function() {
        const obja = {
            name:'Murilo', 
            birthday: new Date('2022-12-20')
        }
        const objb = {}
        objb.name = 'Murilo'
        objb.birthday = new Date('2022-12-20')
        expect(obja).toEqual(objb)
    })
})