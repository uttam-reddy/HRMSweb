import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateChildFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export  class ChildGuard implements CanActivateChild {
  canActivateChild(){
      var item =localStorage.getItem('token');
      if(item != null){
        return true;
      }else{
        return false;
      }
      
  }
  
}
