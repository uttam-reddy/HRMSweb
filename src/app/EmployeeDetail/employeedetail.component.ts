import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/Models/EmployeeModel';
import { ResponseModel } from 'src/Models/ResponseModel';
import { EmployeeService } from '../Services/Employee.service';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  
})
export class EmployeeDetailComponent implements OnInit {

    employees :  Employee=new Employee;
    id : number =0;
    constructor(private employeeservice : EmployeeService,private route : ActivatedRoute ) {


    }

    ngOnInit() {
      
    }

    ngAfterViewInit(){
      this.id=this.route.snapshot.params['id'];
      this.employeeservice.GetEmployeeById(this.id).subscribe(data => {
             var resp=<ResponseModel>data;
             this.employees=resp.entity;
             console.log(this.employees);
      });
    }

    
    
}
