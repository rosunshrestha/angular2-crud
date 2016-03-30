System.register(['angular2/core', '../../services/employee-service', './employee-renderer'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, employee_service_1, employee_renderer_1;
    var EmployeeList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            },
            function (employee_renderer_1_1) {
                employee_renderer_1 = employee_renderer_1_1;
            }],
        execute: function() {
            EmployeeList = (function () {
                function EmployeeList(employeeService) {
                    this.employeeService = employeeService;
                }
                EmployeeList = __decorate([
                    core_1.Component({
                        selector: 'employee-list',
                        directives: [employee_renderer_1.EmployeeRenderer],
                        providers: [employee_service_1.EmployeeService],
                        template: '<h1>Employee List</h1><div>' +
                            '<ul>' +
                            '<li *ngFor="#employee of employeeService.employees">' +
                            '<employee-renderer [employee]="employee"></employee-renderer>' +
                            '</li>' +
                            '</ul>' +
                            '</div>'
                    }), 
                    __metadata('design:paramtypes', [employee_service_1.EmployeeService])
                ], EmployeeList);
                return EmployeeList;
            }());
            exports_1("EmployeeList", EmployeeList);
        }
    }
});
//# sourceMappingURL=employee-list.component.js.map