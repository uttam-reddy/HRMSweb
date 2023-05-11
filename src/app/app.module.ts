import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './Employees/employee.component';
import { LoginComponent } from './Home/login.component';
import { LoginService } from './Services/login.service';
import { UsersComponent } from './Users/users.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgePipe } from './pipes/age.pipe';
import { EmployeeDetailComponent } from './EmployeeDetail/employeedetail.component';
import { AboutComponent } from './About/about.component';
import { ActivityComponent } from './Activity/activity.component';
import { AuthGuard } from './Guards/auth.guard';
import { ResolveGuard } from './Guards/resolve.guard';
import { ChildGuard } from './Guards/child.guard';
import { LoadEmployeeGuard } from './Guards/loademployee.guard';
@NgModule({
  declarations: [
    AppComponent,UsersComponent,LoginComponent,EmployeeComponent, AgePipe,EmployeeDetailComponent,AboutComponent,ActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [LoginService,AuthGuard,ResolveGuard,LoadEmployeeGuard,ChildGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
