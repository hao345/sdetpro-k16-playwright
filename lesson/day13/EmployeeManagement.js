const Employee = require('./Employee')
const SalaryController = require('./SalaryController')

//Create Data | OOP
let teo = new Employee("teo", 20000);
let ti = new Employee("ti", 1000);

//Init Controller, process user-defined data | FP
let salaryController = new SalaryController();

//Get the evaluated result
const totalSalary = salaryController.getTotalSalary([teo,ti]);
console.log(totalSalary)