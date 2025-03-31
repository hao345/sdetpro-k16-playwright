import Employee from "./Employee";

export default class EmployeeController {
    //Count totalSalary
    static getTotalSalary(listEmployee: Employee[]): number {
        let totalSalary = 0;
        for (let employee of listEmployee) {
            employee.getSalary();
            totalSalary += employee.getSalaryValue();
        }
        return totalSalary;
    }

    //Employee with the highest salary
    static findHighestSalaryEmployee(listEmployee: Employee[]): Employee | null {
        let highestSalaryEmployee = listEmployee[0];  // Khởi tạo nhân viên có lương cao nhất là nhân viên đầu tiên

        for (let employee of listEmployee) {
            employee.getSalary();
            if (employee.getSalaryValue() > highestSalaryEmployee.getSalaryValue()) {
                highestSalaryEmployee = employee;
            }
        }
        return highestSalaryEmployee;
    }

    //Employee with the lowest salary
    static findLowestSalaryEmployee(listEmployee: Employee[]): Employee | null {
        let lowestSalaryEmployee = listEmployee[0];

        for (let employee of listEmployee) {
            employee.getSalary();
            if (employee.getSalaryValue() < lowestSalaryEmployee.getSalaryValue()) {
                lowestSalaryEmployee = employee;
            }
        }
        return lowestSalaryEmployee;
    }

    //Sort salary
    static sortEmployeesBySalary(listEmployee: Employee[]): Employee[] {
        return listEmployee.sort((a, b) => {
            a.getSalary();
            b.getSalary();
            return a.getSalaryValue() - b.getSalaryValue();
        });
    }

    //Sort name
    static sortEmployeesByName(listEmployee: Employee[]): Employee[] {
        return listEmployee.sort((a, b) => {
            a.getSalary();
            b.getSalary();
            return a.getName().localeCompare(b.getName());
        });
    }

    static printHighestAndLowestSalaryEmployee(listEmployee: Employee[]): void {
        const highest = this.findHighestSalaryEmployee(listEmployee);
        const lowest = this.findLowestSalaryEmployee(listEmployee);

        if (highest && lowest) {
            console.log(`Highest Salary Employee: ${highest.getName()} with Salary: ${highest.getSalaryValue()}`);
            console.log(`Lowest Salary Employee: ${lowest.getName()} with Salary: ${lowest.getSalaryValue()}`);
        } else {
            console.log("No employees available to compare.");
        }
    }
}