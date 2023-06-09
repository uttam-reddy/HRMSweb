import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, mergeMap, Observable, of, throwError } from 'rxjs';
import { ResponseModel } from 'src/Models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(useranme:string,password: string) : Observable<ResponseModel>  {
    let user={
      Username:useranme,
      Password:password
    }
    return this.http.post('https://hrms2023.azurewebsites.net/api/Login',user).pipe(
      mergeMap((data) => {
        var resp = <ResponseModel>data;
        return of(resp);
      }
      ));  
      
   

  }
}
