function recordMultiParams(
    name,
    lastName,
    motherName,
    birthday,
    nationality,
    address,
    city,
    state,
) {
    return !(!name ||
        !lastName ||
        !motherName ||
        !birthday ||
        !nationality ||
        !address ||
        !city ||
        !state)
}

function recordSingleParam(person) {
    return !(!person ||
        !person.name ||
        !person.lastName ||
        !person.motherName ||
        !person.birthday ||
        !person.nationality ||
        !person.address ||
        !person.city ||
        !person.state)
}

describe('Parameter', function () {
    it(' should return true if all paramters are set', function () {
        const result = recordMultiParams(
            'name',
            'lastName',
            'motherName',
            new Date(),
            'nationality',
            'address',
            'city',
            'state')
        expect(result).toBeTrue()
    })

    it(' should return true if person is set with all properties', function () {
        const person = {
            name: 'name',
            lastName: 'lastName',
            motherName: 'motherName',
            birthday: new Date(),
            nationality: 'nationality',
            address: 'address',
            city: 'city',
            state: 'state'
        }
        expect(recordSingleParam(person)).toBeTrue()
    })
})