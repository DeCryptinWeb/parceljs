import {sayHello} from '../module'

describe('sayHello', () => {
    test('should return the correct message', () => {
        const userData = {firstName: 'John', lastName: 'Doe'}
        expect(sayHello(userData)).toBe(`Hi ${userData.firstName} ${userData.lastName}`)
    })
})

