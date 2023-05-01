import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, mergeMap, Observable, of, throwError } from 'rxjs';
import { ResponseModel } from 'src/Models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  GetEmployees() : Observable<ResponseModel> {
    
    return this.http.get('https://hrms2023.azurewebsites.net/api/employee',{
      headers : {
          "Authorization": 'Bearer ' + localStorage.getItem('token')
      }   
  }).pipe(
      mergeMap((data) => {
        var resp = <ResponseModel>data;
        return of(resp);
      }
      ));  

  }

  GetEmployeeById(id : number) : Observable<ResponseModel> {
    
    return this.http.get('https://hrms2023.azurewebsites.net/api/employee/'+id,{
      headers : {
          "Authorization": 'Bearer ' + localStorage.getItem('token')
      }   }).pipe(
      mergeMap((data) => {
        var resp = <ResponseModel>data;
        return of(resp);
      }
      ));  

  }
}
