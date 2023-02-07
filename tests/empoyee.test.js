
const Employee = require('../library/Employee')
 
const employee = new Employee("Nicole", "3", "nicole@gmail.com",)

describe('Employee', () => {
    it('should get the name, id and email of the employee', () => {
        expect(employee.name).toEqual('Nicole')
        expect(employee.id).toEqual('3')
        expect(employee.email).toEqual('nicole@gmail.com')
    })
});

it('should get the id of the employee from the getName method', () => {
    expect(employee.getName()).toEqual('Nicole')
});
it('should get the email of the employee from the getID method', () => {
    expect(employee.getId()).toEqual('3')
});
it('should get the role of the employee from the getEmail  method', () => {
    expect(employee.getEmail()).toEqual('nicole@gmail.com')
});
it('should get the role of the employee from the getRole method', () => {
    expect(employee.getRole()).toEqual('Employee')
});

