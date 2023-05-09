import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseModel } from 'src/Models/ResponseModel';
import { LoginService } from '../Services/login.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    constructor( private loginservice: LoginService,private router: Router,private fb : FormBuilder) {
        
        
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            username : [''],
            password : ['']
        });
    }
    
    token: string="";
    //username:string="";
    //password:string="";
    

    login(){
        //this.loginForm.reset();
        this.loginservice.login(this.loginForm.get('username')?.value,this.loginForm.get('password')?.value).subscribe((data) => {
            //this.token=data;
            var resp=<ResponseModel>data;
            this.token=resp.token;
            localStorage.setItem('token', this.token);
            this.router.navigate(['/employees']);


        },(err) => console.log(err));
    }
  
}
