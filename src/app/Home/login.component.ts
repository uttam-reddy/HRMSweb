import { Component } from '@angular/core';
import { ResponseModel } from 'src/Models/ResponseModel';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
})
export class LoginComponent {
    constructor( private loginservice: LoginService) {
        
        
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
            


        });
    }
  
}
