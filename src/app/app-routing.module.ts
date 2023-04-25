import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './About/about.component';
import { ActivityComponent } from './Activity/activity.component';
import { EmployeeDetailComponent } from './EmployeeDetail/employeedetail.component';
import { EmployeeComponent } from './Employees/employee.component';
import { AuthGuard } from './Guards/auth.guard';
import { ChildGuard } from './Guards/child.guard';
import { ResolveGuard } from './Guards/resolve.guard';
import { LoginComponent } from './Home/login.component';
import { UsersComponent } from './Users/users.component';

const routes: Routes = [
{path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'users',component:UsersComponent},
  {path:'employees',component:EmployeeComponent,canActivate:[AuthGuard],resolve:{ data : ResolveGuard}},
  {path:'employees/:id',component:EmployeeDetailComponent,canActivate:[AuthGuard],canActivateChild:[ChildGuard],
children :
[
  {path:'',redirectTo:'about',pathMatch:'full'},
{path:'about',component:AboutComponent},
{path:'activity',component:ActivityComponent},
],  },
  {path:"**",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
