import {IArgs} from './types'

export const some = (args: IArgs): void => {
    const {first, second} = args
    console.log(`log coddwming from mod.js => ${second}`)
}
