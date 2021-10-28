import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-upload-recipe',
  templateUrl: './upload-recipe.component.html',
  styleUrls: ['./upload-recipe.component.css']
})
export class UploadRecipeComponent implements OnInit {

  recipeForm : FormGroup;

  constructor(private userService : UserService, private router : Router, private activeRoute : ActivatedRoute) { 
    this.recipeForm = new FormGroup({
      'recipe' : new FormControl("",Validators.required),
      ingredients : new FormArray([
        new FormControl("",Validators.required)
      ]),
      steps : new FormArray([
        new FormControl("",Validators.required)
      ]),
      'image' : new FormControl("",Validators.required)
    })
  }

  

  ngOnInit(): void {
  }

  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  get steps(): FormArray{
    return this.recipeForm.get('steps') as FormArray;
  }

  addIngredient(){
    this.ingredients.push(new FormControl("",Validators.required));
  }

  addStep(){
    this.steps.push(new FormControl("",Validators.required));
  }

  onSubmit(){
    if(this.recipeForm.value.ingredients[this.recipeForm.value.ingredients.length-1]!=""){
      if(this.recipeForm.value.steps[this.recipeForm.value.steps.length-1]!=""){
        console.log("executing")
        console.log(this.recipeForm.value)
        this.userService.storeUploadedRecipe(this.recipeForm.value).subscribe((data:any)=>{
          console.log(data)
          this.router.navigate(['../myrecipelist'],{relativeTo: this.activeRoute})
        })
      }
    }
  }

}
