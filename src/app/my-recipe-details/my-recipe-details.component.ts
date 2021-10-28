import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-recipe-details',
  templateUrl: './my-recipe-details.component.html',
  styleUrls: ['./my-recipe-details.component.css']
})
export class MyRecipeDetailsComponent implements OnInit {

  result : any;
  id : string = "";

  constructor(private userService : UserService,private activeRoute: ActivatedRoute) { 
    this.activeRoute.params.subscribe((paramsData: any)=>{
      console.log(paramsData.id)
      this.id = paramsData.id
      this.userService.fecthUploadedRecipeById(this.id).subscribe((data : any)=>{
        this.result = data
        console.log(this.result)
      })
    })
  }

  ngOnInit(): void {
  }

}
