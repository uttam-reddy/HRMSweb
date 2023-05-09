import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/Models/EmployeeModel';
import { ResponseModel } from 'src/Models/ResponseModel';
import { EmployeeService } from '../Services/Employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  
})
export class EmployeeComponent implements OnInit {

    employees :  Employee[] = [];
    constructor(private employeeservice : EmployeeService ,private route : ActivatedRoute) {


    }

    ngOnInit() {
        // this.employeeservice.GetEmployees().subscribe(data => {
        //        var resp=<ResponseModel>data;
        //        this.employees=resp.entity;
        //        console.log(this.employees);
        // });
        
    }

    ngAfterViewInit(){
      this.employees=<Employee[]>this.route.snapshot.data['data']?.entity;
    }

    
    
}
