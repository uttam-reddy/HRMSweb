import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from '../Services/Employee.service';

@Injectable({
  providedIn: 'root'
})
export class LoadEmployeeGuard implements Resolve<any> {
  /**
   *
   */
  id:any;
  constructor(private empservice : EmployeeService) {
    

  }

  resolve(route : ActivatedRouteSnapshot){
    
  
    this.id=parseInt(route.params['id']);
    return this.empservice.GetEmployeeById(this.id);
    
  }
  
 
  
}
