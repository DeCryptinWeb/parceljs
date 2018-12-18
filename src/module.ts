import {IUserData} from './types'

export const sayHello = (userData: IUserData): string => {
    return `Hi ${userData.firstName} ${userData.lastName}`
}
