import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-searched-recipe-details',
  templateUrl: './searched-recipe-details.component.html',
  styleUrls: ['./searched-recipe-details.component.css']
})
export class SearchedRecipeDetailsComponent implements OnInit {

  isEmpty = false;
  result : Array<any> = [];

  constructor(private userService : UserService, private router : Router) { 
    this.userService.fecthSearchedRecipe().subscribe((data:any)=>{
      this.result = data[0].results
      if(this.result.length == 0){
        this.isEmpty = true;
      }
    })
  }

  ngOnInit(): void {
  }


}
