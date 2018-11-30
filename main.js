const mod = require('./myModule')

console.log(mod.company_name)
mod.demo()
let emp1 = new mod.emp('biswajit','JPMC')
emp1.display()