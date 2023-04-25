import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildGuard implements CanActivate {
  canActivate(){
      var item =localStorage.getItem('token');
      if(item != null){
        return true;
      }else{
        return false;
      }
      
  }
  
}