import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { loguser, recipe, reguser } from './model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  findRecipe( data : recipe){
    let a = data.cuisine;
    let b = data.diet;
    let c = data.intolerance;
    let d = data.meal
    return this.http.get(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${a}&diet=${b}&intolerances=${c}&type=${d}&apiKey=55156eb7b3144e089593d74ee3072178`,
      {
        headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          Authorization : localStorage.getItem("access_token") || ""
        })
      }
    )
  }

  storeRecipeSearched( data : any){
    return this.http.post(`https://foodrecipefinalproject.herokuapp.com/storefoundrecipes`,data,
      {
        headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          Authorization : localStorage.getItem("access_token") || ""
        })
      }
    )
  }

  fecthSearchedRecipe(){
    return this.http.get("https://foodrecipefinalproject.herokuapp.com/getfoundrecipes",
      {
        headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          Authorization : localStorage.getItem("access_token") || ""
        })
      }
    )
  }

  getProcedureById( id : number){
    return this.http.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=55156eb7b3144e089593d74ee3072178`,
      {
        headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          Authorization : localStorage.getItem("access_token") || ""
        })
      }
    )
  }

  storeUploadedRecipe( data : any){
    return this.http.post("https://foodrecipefinalproject.herokuapp.com/storeuploadedrecipe",data,
      {
        headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          Authorization : localStorage.getItem("access_token") || ""
        })
      }
    )

  }

  fetchUploadedRecipes(){
    return this.http.get("https://foodrecipefinalproject.herokuapp.com/getuploadedrecipes",
      {
        headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          Authorization : localStorage.getItem("access_token") || ""
        })
      }
    )
  }

  fetchAllUploadedRecipes(){
    return this.http.get("https://foodrecipefinalproject.herokuapp.com/getalluploadedrecipes",
      {
        headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          Authorization : localStorage.getItem("access_token") || ""
        })
      }
    )
  }


  fecthUploadedRecipeById(id : string){
    return this.http.get(`https://foodrecipefinalproject.herokuapp.com/getuploadedrecipebyid/${id}`,
      {
        headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          Authorization : localStorage.getItem("access_token") || ""
        })
      }
    )
  }

  updateRecipeById( id : string, data : any){
    return this.http.put(`https://foodrecipefinalproject.herokuapp.com/updaterecipebyid/${id}`,data,
      {
        headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          Authorization : localStorage.getItem("access_token") || ""
        })
      }
    )
  }

  deleteRecipeById(id:string){
    return this.http.delete(`https://foodrecipefinalproject.herokuapp.com/deleterecipebyid/${id}`,
      {
        headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          Authorization : localStorage.getItem("access_token") || ""
        })
      }
    )
  }

  saveUser(data : reguser){
    return this.http.post("https://foodrecipefinalproject.herokuapp.com/registeruser",data);
  }

  loginSave(data : loguser){
    return this.http.post("https://foodrecipefinalproject.herokuapp.com/loginuser",data);
  }
}
