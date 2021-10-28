import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-all-recipe-view-procedure',
  templateUrl: './all-recipe-view-procedure.component.html',
  styleUrls: ['./all-recipe-view-procedure.component.css']
})
export class AllRecipeViewProcedureComponent implements OnInit {

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
