import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './About/about.component';
import { ActivityComponent } from './Activity/activity.component';
import { EmployeeDetailComponent } from './EmployeeDetail/employeedetail.component';
import { EmployeeComponent } from './Employees/employee.component';
import { AuthGuard } from './Guards/auth.guard';
import {ChildGuard} from './Guards/child.guard';
import { ResolveGuard } from './Guards/resolve.guard';
import { LoginComponent } from './Home/login.component';
import { UsersComponent } from './Users/users.component';
import { ProductDashboardModule } from './product-dashboard/product-dashboard.module';
import { LoadEmployeeGuard } from './Guards/loademployee.guard';
import { EmployeeEditComponent } from './EmployeeEdit/employeeedit.component';
const routes: Routes = [
{path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'users',component:UsersComponent,canActivate:[AuthGuard]},
  {path:'employees',component:EmployeeComponent,canActivate:[AuthGuard],resolve:{ data : ResolveGuard}},
  {path:'employeeedit/:id',component:EmployeeEditComponent,canActivate:[AuthGuard],resolve:{ data : LoadEmployeeGuard},runGuardsAndResolvers: 'always'},
  
  {path:'employees/:id',component:EmployeeDetailComponent,canActivate:[AuthGuard],resolve:{ data : LoadEmployeeGuard},canActivateChild:[ChildGuard],
children :
[
  {path:'',redirectTo:'activity',pathMatch:'full'},
{path:'about',component:AboutComponent},
{path:'activity',component:ActivityComponent,
children:
[
  {path:'',redirectTo:'product',pathMatch:'full'},
  {path : 'product',loadChildren : () =>  ProductDashboardModule}

]},
],  },
  {path:"**",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
