import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department, Employee, EmployeeActivity } from 'src/Models/EmployeeModel';
import { ResponseModel } from 'src/Models/ResponseModel';
import { EmployeeService } from '../Services/Employee.service';
import { EmployeeDto } from 'src/Models/EmployeeDto';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employeeedit',
  templateUrl: './employeeedit.component.html',
  
})
export class EmployeeEditComponent implements OnInit {

    employees :  Employee=new Employee;
    departments :  Department[]=[];
    employeedto : EmployeeDto = new EmployeeDto;
    id : number =0;
    employeeform : FormGroup;
    
    constructor(private employeeservice : EmployeeService,
      private route : ActivatedRoute,private fb : FormBuilder ) {


    }

    ngOnInit() {
      this.employeeform = this.fb.group({
        name : [''],
        address : [''],
        salary : [''],
        status :[''],
        department:0
  
  
  
      });
      
      //this.employeeservice.GetEmployeeById(this.id).subscribe(data => {
             //var resp=<ResponseModel>data;
       //      this.employees=resp.entity;
       //      console.log(this.employees);
     // });
     this.id=this.route.snapshot.params['id'];
      this.employees=<Employee>this.route.snapshot.data['data']?.entity;
      this.employeeservice.GetDepartments().subscribe(data => {
        var resp=<ResponseModel>data;
      this.departments=resp.entity;
      this.employeeform.setValue({
        name : this.employees.name,
        address : this.employees.address,
        salary : this.employees.salary,
        status :this.employees.status,
        department : this.employees.departmentId
       });
        console.log(this.employeeform.value);
        console.log(this.employees.departmentId);
});

       
    }

    onsubmit() : void{
       console.log(this.employeeform.value)
    }

    ngAfterViewInit(){
      

       

    }

    onChange(event: any){
      console.log(event.target.value);
      console.log(this.employeeform.value)
      this.employeeform.patchValue({
        department : parseInt(event.target.value)

      });
    }


    UpdateEmployee(){
      var employee= new EmployeeDto();
      employee.name=this.employeeform.get('name').value;
      employee.address=this.employeeform.get('address').value;
      employee.salary= this.employeeform.get('salary').value;
      employee.status=this.employeeform.get('status').value;
      employee.departmentId=this.employeeform.get('department').value;
      employee.dateCreated = (new Date()).toDateString();
      employee.dateUpdated = (new Date()).toDateString();

      //employee.
      

      this.employeeservice.UpdateEmployee(this.id,employee).subscribe(data => {
        this.employees=data.entity;
        this.employeeform.setValue({
          
          name : this.employees.name,
          address : this.employees.address,
          salary : this.employees.salary,
          status :this.employees.status,
          department :  this.employees.departmentId,
          //isDeleted : false
         });
      });

    }

    
    
}
