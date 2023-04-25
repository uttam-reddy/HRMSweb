import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseModel } from 'src/Models/ResponseModel';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
})
export class LoginComponent {
    constructor( private loginservice: LoginService,private router: Router) {
        
        
    }
    token: string="";
    username:string="";
    password:string="";
    

    login(){
        this.loginservice.login(this.username,this.password).subscribe((data) => {
            //this.token=data;
            var resp=<ResponseModel>data;
            this.token=resp.token;
            localStorage.setItem('token', this.token);
            this.router.navigate(['/employees']);


        },(err) => console.log(err));
    }
  
}
