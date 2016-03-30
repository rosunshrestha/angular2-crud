import {Injectable} from "angular2/core"
import {Employee} from "../models/employee";

@Injectable()
export class EmployeeService{
    employees = [
        new Employee('Roshan','Shrestha','9849150654','rs@gmail.com'),
        new Employee('Jiwan','Mishra','9849134354','jm@gmail.com'),
        new Employee('Milan','Lama','9849134343','ml@gmail.com'),
        new Employee('Anish','Rai','9849134322','ar@gmail.com')
    ];

    addEmployee(employee:Employee){
        this.employees = [...this.employees, employee];
    }
}
