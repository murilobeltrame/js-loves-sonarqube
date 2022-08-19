function doStepOne(input){
    return ['Step One'].concat(input)
}

function doStepTwo(input){
    return ['Step Two'].concat(input)
}

function doSomething() {
    let content = doStepOne([])
    content = doStepTwo(content)
    return content
}

function doSamething() {
    let content = doStepOne([])
    content = doStepTwo(content)
    return content
}

describe('Functions', function () {
    it(' something should have both steps', function () {
        const result = doSomething()
        expect(result).toHaveSize(2)
        expect(result).toContain('Step One')
        expect(result).toContain('Step Two')
    })

    it(' something should have both steps', function () {
        const result = doSamething()
        expect(result).toHaveSize(2)
        expect(result).toContain('Step One')
        expect(result).toContain('Step Two')
    })
})