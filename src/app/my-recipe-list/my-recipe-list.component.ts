import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-recipe-list',
  templateUrl: './my-recipe-list.component.html',
  styleUrls: ['./my-recipe-list.component.css']
})
export class MyRecipeListComponent implements OnInit {

  myrecipelist : Array<any> = [];

  constructor(private userService : UserService) { 
    this.userService.fetchUploadedRecipes().subscribe((data : any)=>{
      this.myrecipelist = data
    })
  }

  ngOnInit(): void {
  }

  deleteRecipe(id : string){
    this.userService.deleteRecipeById(id).subscribe(()=>{
      this.userService.fetchUploadedRecipes().subscribe((data:any)=>{
        this.myrecipelist = data
      })
    })
  }

}
