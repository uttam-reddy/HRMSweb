import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ResponseModel } from 'src/Models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(useranme:string,password: string)  {
    let user={
      Username:useranme,
      Password:password
    }
    return this.http.post('https://hrms2023.azurewebsites.net/api/Login',user)
      map((data: any) => {
        var resp: ResponseModel;
        resp=<ResponseModel>data.json();
      }), catchError( error => {
        return (error);
      })
   

  }
}
