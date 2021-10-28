import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  useremail = ""
  constructor(private router : Router) { 
    this.useremail = localStorage.getItem("user_email") || ""
    console.log(this.useremail)
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem("access_token")
    this.router.navigate(['/'])
  }

}
