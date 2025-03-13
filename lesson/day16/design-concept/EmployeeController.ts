import Employee from "./Employee";

//Functional Programing
export default class EmployeeController{
    static getTotalSalary(listEmployee:Employee[]):number{
        let totalSalary = 0;
        for (let employee of listEmployee){
            totalSalary += employee.getSalary();
        }
        return totalSalary;
    }
}