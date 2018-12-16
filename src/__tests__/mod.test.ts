import {sayHello} from '../mod'

test('should return the correct message', () => {
    const userData = {firstName: 'Ivan', lastName: 'Viñas'}
    expect(sayHello(userData)).toBe(`Hi ${userData.firstName} ${userData.lastName}`)
})
