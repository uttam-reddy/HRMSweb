import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from '../Services/Employee.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {
  /**
   *
   */
  constructor(private empservice : EmployeeService) {
    

  }
  resolve(){
    return this.empservice.GetEmployees();
    
  }
  
 
  
}
