import {IArgs, IUserData} from './types'

export const some = (args: IArgs): void => {
    const {first, second} = args
    console.log(`log coming from mod.js => ${second}`)
}

export const sayHello = (
    userData: IUserData
    ): string => {
    return `Hi ${userData.firstName} ${userData.lastName}`
}
