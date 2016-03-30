System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Employee;
    return {
        setters:[],
        execute: function() {
            Employee = (function () {
                function Employee(first_name, last_name, phone, email) {
                    if (first_name === void 0) { first_name = ""; }
                    if (last_name === void 0) { last_name = ""; }
                    if (phone === void 0) { phone = ""; }
                    if (email === void 0) { email = ""; }
                    this.first_name = first_name;
                    this.last_name = last_name;
                    this.phone = phone;
                    this.email = email;
                    this.status = "active";
                }
                Employee.prototype.toggle = function () {
                    this.status = this.status == "active" ? "inactive" : "active";
                };
                return Employee;
            }());
            exports_1("Employee", Employee);
        }
    }
});
//# sourceMappingURL=employee.js.map