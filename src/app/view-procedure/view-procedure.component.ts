import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-procedure',
  templateUrl: './view-procedure.component.html',
  styleUrls: ['./view-procedure.component.css']
})
export class ViewProcedureComponent implements OnInit {

  isEmpty = false;
  result : Array<any> = [];
  id : number = 0;

  constructor(private userService : UserService,private activeRoute: ActivatedRoute) { 
    this.userService.fecthSearchedRecipe().subscribe((data:any)=>{
      this.result = data[0]
    })
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((paramsData)=>{
      console.log(paramsData.id)
      this.id = paramsData.id
      this.userService.getProcedureById(this.id).subscribe((process : any) =>{
        if(process.length == 0){
          this.isEmpty = true
        }
        else{
          console.log(process)
          this.result = process[0].steps
          console.log(this.result)
        }
      })
    })
  }

}
