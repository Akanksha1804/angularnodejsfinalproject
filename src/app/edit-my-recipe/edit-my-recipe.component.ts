import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-edit-my-recipe',
  templateUrl: './edit-my-recipe.component.html',
  styleUrls: ['./edit-my-recipe.component.css']
})
export class EditMyRecipeComponent implements OnInit {

  result : any
  recipeForm : FormGroup;
  id : string = "";

  constructor(private activeRoute : ActivatedRoute, private userService : UserService, private router : Router) { 
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

  ngOnInit(): void {
    this.activeRoute.params.subscribe((paramsData)=>{
      console.log(paramsData.id)
      this.id = paramsData.id;
      this.userService.fecthUploadedRecipeById(paramsData.id).subscribe((data:any) => {
        console.log(data);
        delete data._id;
        //this.recipeForm.setValue(data);
        const ing = this.recipeForm.get('ingredients') as FormArray;
        const stp = this.recipeForm.get('steps') as FormArray;

        while (ing.length) {
          ing.removeAt(0);
        }

        while (stp.length) {
          stp.removeAt(0);
        }

        this.recipeForm.patchValue(data)
        
        data.ingredients.forEach((element: AbstractControl) => {
          this.addIngredient();
        });

        data.steps.forEach((element: AbstractControl) => {
          this.addStep();
        });

        this.recipeForm.setValue(data)

      })
    })
  }

  edit(){
    if(this.recipeForm.value.ingredients[this.recipeForm.value.ingredients.length-1]!=""){
      if(this.recipeForm.value.steps[this.recipeForm.value.steps.length-1]!=""){
        this.userService.updateRecipeById(this.id,this.recipeForm.value).subscribe((data:any)=>{
          console.log("editing")
          this.router.navigate(['../../'],{relativeTo: this.activeRoute})
        })
      }
    }
  }

}
