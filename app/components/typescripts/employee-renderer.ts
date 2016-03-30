import {Component, Input} from "angular2/core"

@Component({
    selector: 'employee-renderer',
    template: '<style> .completed{ text-decoration: line-through }</style>' +
    '<div><span [ngClass]="employee.status">' +  '{{employee.first_name}} {{employee.last_name}}'+'</span>' +
    '<button (click)="employee.toggle()">Change Status</button></div>'
})

export class EmployeeRenderer{
    @Input() employee;
}
