import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllRecipeViewProcedureComponent } from './all-recipe-view-procedure/all-recipe-view-procedure.component';
import { AllUploadedRecipesComponent } from './all-uploaded-recipes/all-uploaded-recipes.component';
import { EditMyRecipeComponent } from './edit-my-recipe/edit-my-recipe.component';
import { FindRecipeComponent } from './find-recipe/find-recipe.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyRecipeDetailsComponent } from './my-recipe-details/my-recipe-details.component';
import { MyRecipeListComponent } from './my-recipe-list/my-recipe-list.component';
import { RegisterComponent } from './register/register.component';
import { SearchedRecipeDetailsComponent } from './searched-recipe-details/searched-recipe-details.component';
import { UploadRecipeComponent } from './upload-recipe/upload-recipe.component';
import { ViewProcedureComponent } from './view-procedure/view-procedure.component';

const routes: Routes = [
  {
    path : "home",
    component : HomeComponent,
    children : [
      {
        path : "allrecipes",
        component : AllUploadedRecipesComponent
      },
      {
        path : "allrecipes/viewallrecipedetails/:id",
        component : AllRecipeViewProcedureComponent
      },
      {
        path : "findrecipe",
        component : FindRecipeComponent
      },
      {
        path : "searchedrecipedetails",
        component : SearchedRecipeDetailsComponent
      },
      {
        path : "viewprocedure/:id",
        component : ViewProcedureComponent
      },
      {
        path : "uploadrecipe",
        component : UploadRecipeComponent
      },
      {
        path : "myrecipelist",
        component : MyRecipeListComponent
      },
      {
        path : "myrecipelist/myrecipedetails/:id",
        component : MyRecipeDetailsComponent
      },
      {
        path : "myrecipelist/editmyrecipe/:id",
        component : EditMyRecipeComponent
      }
    ]
  },
  {
    path : "",
    component : LoginComponent
  },
  {
    path : "register",
    component : RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
