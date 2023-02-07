const Engineer = require('../library/engineer')

const engineer = new Engineer("Nicole", "3", "nicole@gmail.com", "nicolefallis")

describe('Engineer', () => {
    it('should get the name, id, and email, and github of the engineer', () => {
        expect(engineer.name).toEqual('Nicole')
        expect(engineer.id).toEqual('3')
        expect(engineer.email).toEqual('nicole@gmail.com')
        expect(engineer.github).toEqual('nicolefallis')
    })
});

it('should get the github of the engineer from the getGithub method', () => {
    expect(engineer.getGithub()).toEqual('nicolefallis')
});
it('should get the role of the engineer from the getRole method', () => {
    expect(engineer.getRole()).toEqual('Engineer')
});