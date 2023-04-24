import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './Employees/employee.component';
import { LoginComponent } from './Home/login.component';
import { UsersComponent } from './Users/users.component';

const routes: Routes = [
{path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'users',component:UsersComponent},
  {path:'employees',component:EmployeeComponent},
  {path:"**",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
