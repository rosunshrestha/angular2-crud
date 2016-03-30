import {Component, Directive} from 'angular2/core';
import {EmployeeList} from './employee-list.component';
import {ROUTER_DIRECTIVES, RouteConfig, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
    selector: 'my-app',
    template: `<header>
		<nav>
		<a [routerLink]="['Employees']">Employees</a>
		<a [routerLink]="['NewEmployee']">New Employee</a>
		</nav>
		</header>
	   <div>
    		<router-outlet></router-outlet>
    	</div>`,
    directives: [EmployeeList, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
  { path: 'employees', name: 'Employees', component: EmployeeList, useAsDefault: true },
  { path: 'newemployee', name: 'NewEmployee', component: EmployeeList }
])

export class AppComponent {
  public employees = [
  {first_name:'Roshan', lastname: 'Shrestha', phone: '9849150569',email: 'rosun.shrestha@gmail.com'},
  {first_name:'Abhinav', lastname: 'Mishra', phone: '985445514',email: 'abhinav.mishra@gmail.com'},
  {first_name:'Raju', lastname: 'Tamang', phone: '9849455469',email: 'rt@gmail.com'},
  {first_name:'Salil', lastname: 'Rai', phone: '9849453677',email: 'salil.rai@gmail.com'}
  ]
}
