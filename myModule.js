exports.company_name = 'Accenture'

exports.demo = () => console.log('this is a demo module')


class Employee{
    constructor(name,project){
        this.name = name;
        this.project = project;
    }

    display(){
        console.log(this.name+'==>'+this.project)
    }
}

exports.emp = Employee
