const os  = require('os')
const { uptime } = require('process')

//info of curren usre
const user = os.userInfo()
console.log(user)

console.log(`The System up time is: ${os,uptime()} seconds`)

const currenOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currenOs)