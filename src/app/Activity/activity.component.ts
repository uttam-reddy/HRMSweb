import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee, EmployeeActivity } from 'src/Models/EmployeeModel';
import { ResponseModel } from 'src/Models/ResponseModel';
import { EmployeeService } from '../Services/Employee.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  
})
export class ActivityComponent implements OnInit {

    employees :  Employee=new Employee;
    id : number =0;
    employeename : string="";
    employeesactivity : EmployeeActivity[]= [];
    constructor(private employeeservice : EmployeeService,private route : ActivatedRoute ) {


    }

    ngOnInit() {
      this.id= parseInt(this.route.snapshot.parent?.params['id']);
      this.employeeservice.GetEmployeeActivitiesById(this.id).subscribe(data => {
        //var resp=<ResponseModel>data;
        this.employeesactivity=data.entity;
        if(data.entity.length > 0){
          this.employeename=data?.entity[0].employeeName;
        }
        
       console.log(this.employeesactivity);
});
    }

    
    
}
