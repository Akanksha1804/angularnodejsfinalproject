import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  isInValid = false;

  constructor(private userService : UserService,private router : Router) { 
    this.loginForm = new FormGroup({
      lemail : new FormControl("",Validators.required),
      lpw : new FormControl("",Validators.required)
    })
  }

  ngOnInit(): void {
  }

  checkUser(){
    console.log(this.loginForm.value)
    this.userService.loginSave(this.loginForm.value).subscribe((data : any) => {
      //console.log("successfully logged in");
      console.log(data.message)
      //this.router.navigate(['/home']);
      if(data.message === "Successfully logged in"){
        console.log(data)
        localStorage.setItem("user_email",data.userid)
        window.localStorage.setItem("access_token",data.token)
        this.router.navigate(['/home/allrecipes']);
      }else{
        this.isInValid = true
      }
    },(err : any)=>{
      console.log(err)
    })
  }

}
