System.register(['angular2/core', './employee-list.component', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, employee_list_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (employee_list_component_1_1) {
                employee_list_component_1 = employee_list_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.employees = [
                        { first_name: 'Roshan', lastname: 'Shrestha', phone: '9849150569', email: 'rosun.shrestha@gmail.com' },
                        { first_name: 'Abhinav', lastname: 'Mishra', phone: '985445514', email: 'abhinav.mishra@gmail.com' },
                        { first_name: 'Raju', lastname: 'Tamang', phone: '9849455469', email: 'rt@gmail.com' },
                        { first_name: 'Salil', lastname: 'Rai', phone: '9849453677', email: 'salil.rai@gmail.com' }
                    ];
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<header>\n\t\t<nav>\n\t\t<a [routerLink]=\"['Employees']\">Employees</a>\n\t\t<a [routerLink]=\"['NewEmployee']\">New Employee</a>\n\t\t</nav>\n\t\t</header>\n\t   <div>\n    \t\t<router-outlet></router-outlet>\n    \t</div>",
                        directives: [employee_list_component_1.EmployeeList, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: 'employees', name: 'Employees', component: employee_list_component_1.EmployeeList, useAsDefault: true },
                        { path: 'newemployee', name: 'NewEmployee', component: employee_list_component_1.EmployeeList }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map