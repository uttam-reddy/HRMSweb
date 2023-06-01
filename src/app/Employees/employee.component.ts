import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/Models/EmployeeModel';
import { ResponseModel } from 'src/Models/ResponseModel';
import { EmployeeService } from '../Services/Employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  
})
export class EmployeeComponent implements OnInit {

    employees :  Employee[] = [];
    constructor(private employeeservice : EmployeeService ,private route : ActivatedRoute,private _router : Router) {


    }

    ngOnInit() {
        
      this.employees=<Employee[]>this.route.snapshot.data['data']?.entity;
    }

    ngAfterViewInit(){
      
    }

    navigate(id : any){
      this._router.navigate(['/employeeedit',id]);
    }

    
    
}
