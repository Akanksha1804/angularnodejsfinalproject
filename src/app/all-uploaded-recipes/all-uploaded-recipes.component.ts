import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-all-uploaded-recipes',
  templateUrl: './all-uploaded-recipes.component.html',
  styleUrls: ['./all-uploaded-recipes.component.css']
})
export class AllUploadedRecipesComponent implements OnInit {

  allrecipelist : Array<any> = [];

  constructor(private userService : UserService) { 
    this.userService.fetchAllUploadedRecipes().subscribe((data : any)=>{
      this.allrecipelist = data
    })
  }

  ngOnInit(): void {
  }

}
