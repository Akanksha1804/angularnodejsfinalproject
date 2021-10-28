import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FindRecipeComponent } from './find-recipe/find-recipe.component';
import { SearchedRecipeDetailsComponent } from './searched-recipe-details/searched-recipe-details.component';
import { ViewProcedureComponent } from './view-procedure/view-procedure.component';
import { UploadRecipeComponent } from './upload-recipe/upload-recipe.component';
import { MyRecipeListComponent } from './my-recipe-list/my-recipe-list.component';
import { MyRecipeDetailsComponent } from './my-recipe-details/my-recipe-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EditMyRecipeComponent } from './edit-my-recipe/edit-my-recipe.component';
import { AllUploadedRecipesComponent } from './all-uploaded-recipes/all-uploaded-recipes.component';
import { AllRecipeViewProcedureComponent } from './all-recipe-view-procedure/all-recipe-view-procedure.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarComponent,
    FindRecipeComponent,
    SearchedRecipeDetailsComponent,
    ViewProcedureComponent,
    UploadRecipeComponent,
    MyRecipeListComponent,
    MyRecipeDetailsComponent,
    RegisterComponent,
    LoginComponent,
    EditMyRecipeComponent,
    AllUploadedRecipesComponent,
    AllRecipeViewProcedureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
