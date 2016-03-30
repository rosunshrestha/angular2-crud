import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './components/typescripts/app.component';
import {EmployeeService} from './services/employee-service';
import {ROUTER_PROVIDERS}  from 'angular2/router';

bootstrap(AppComponent, [EmployeeService, ROUTER_PROVIDERS]);
