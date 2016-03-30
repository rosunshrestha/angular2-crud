import {Component} from 'angular2/core';
import {EmployeeService} from '../../services/employee-service';
import {EmployeeRenderer} from './employee-renderer';

@Component({
    selector: 'employee-list',
    directives: [EmployeeRenderer],
    providers: [EmployeeService],
    template: '<h1>Employee List</h1><div>' +
        '<ul>' +
            '<li *ngFor="#employee of employeeService.employees">' +
                '<employee-renderer [employee]="employee"></employee-renderer>' +
            '</li>' +
        '</ul>' +
    '</div>'
})

export class EmployeeList{
    constructor(public employeeService:EmployeeService){
    }
}
