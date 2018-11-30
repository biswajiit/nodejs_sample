console.log("hello biswajit")

var i = [123, "abc"]
i.push("new") // pop and push from the last , shift and unshift from the starting
console.log(i)


class Employee{
    constructor(name,project){
        this.name = name;
        this.project = project;
    }

    display(){
        console.log(this.name+'==>'+this.project)
    }
}

var biswajit = new Employee('biswajit','jpmc');
biswajit.display();