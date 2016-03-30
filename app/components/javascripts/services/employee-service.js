System.register(["angular2/core", "../models/employee"], function(exports_1, context_1) {
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
    var core_1, employee_1;
    var EmployeeService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (employee_1_1) {
                employee_1 = employee_1_1;
            }],
        execute: function() {
            EmployeeService = (function () {
                function EmployeeService() {
                    this.employees = [
                        new employee_1.Employee('Roshan', 'Shrestha', '9849150654', 'rs@gmail.com'),
                        new employee_1.Employee('Jiwan', 'Mishra', '9849134354', 'jm@gmail.com'),
                        new employee_1.Employee('Milan', 'Lama', '9849134343', 'ml@gmail.com'),
                        new employee_1.Employee('Anish', 'Rai', '9849134322', 'ar@gmail.com')
                    ];
                }
                EmployeeService.prototype.addEmployee = function (employee) {
                    this.employees = this.employees.concat([employee]);
                };
                EmployeeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], EmployeeService);
                return EmployeeService;
            }());
            exports_1("EmployeeService", EmployeeService);
        }
    }
});
//# sourceMappingURL=employee-service.js.map