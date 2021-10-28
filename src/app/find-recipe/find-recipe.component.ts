import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-find-recipe',
  templateUrl: './find-recipe.component.html',
  styleUrls: ['./find-recipe.component.css']
})
export class FindRecipeComponent implements OnInit {

  cuisines : Array<string> = ["Indian","American","Chinese","Japanese","Korean","French","Spanish",
                              "Thai","Southern","Mexican"]

  diets : Array<string> = ["Gluten Free","Ketogenic","Vegetarian","Lacto-Vegetarian","Ovo-Vegetarian",
                          "Vegan","Pescetarian","Whole30","Primal","Low FODMAP"]

  intolerances : Array<string> = ["Dairy","Egg","Grain","Peanut","Seafood","Sesame","Shellfish","Soy",
                                  "Sulfite","Wheat"]

  meals : Array<string> = ["main course","side dish","dessert","appetizer","salad","soup","snack",
                          "sauce","fingerfood","drink"]


  findRecipeForm : FormGroup; 

  constructor(private userService : UserService, private http : HttpClient,private router : Router, private activeRoute : ActivatedRoute) { 
    this.findRecipeForm = new FormGroup({
      'cuisine' : new FormControl("",Validators.required),
      'diet' : new FormControl("",Validators.required),
      'intolerance' : new FormControl("",Validators.required),
      'meal' : new FormControl("",Validators.required)
    })
  }

  ngOnInit(): void {
  }

  find(){
    console.log(this.findRecipeForm.value)
    this.userService.findRecipe(this.findRecipeForm.value).subscribe((data : any)=>{
      console.log(data)
      this.userService.storeRecipeSearched(data).subscribe((dataone:any)=>{
        console.log(dataone)
        this.router.navigate(['../searchedrecipedetails'],{relativeTo: this.activeRoute})
      })
    })
  }

}
