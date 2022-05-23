import os from 'os'
console.log(os.hostname())
console.log(os.homedir())
console.log(os.version())
console.log(os.type())

import {f} from './Welcome.js'
console.log(f('Привет, юзер. Вижу ты зашел с ') + os.version)
