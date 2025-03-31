import EmployeeController from "./EmployeeController";
import FTE from "./FTE";
import Contractor from "./Contractor";

function main() {
    const employees = [
        new FTE("John Doe"),
        new Contractor("Jane Smith"),
        new FTE("Alice Brown"),
        new Contractor("Bob White")
    ];

    EmployeeController.printHighestAndLowestSalaryEmployee(employees);

    const totalSalary = EmployeeController.getTotalSalary(employees);
    console.log(`Total salary of all employees: ${totalSalary}`);

    const sortedBySalary = EmployeeController.sortEmployeesBySalary(employees);
    console.log("Employees sorted by salary:");
    sortedBySalary.forEach(employee => {
        console.log(`${employee.getName()} - ${employee.getSalaryValue()}`);
    });

    const sortedByName = EmployeeController.sortEmployeesByName(employees);
    console.log("Employees sorted by name:");
    sortedByName.forEach(employee => {
        console.log(`${employee.getName()} - ${employee.getSalaryValue()}`);
    });
}

main();
