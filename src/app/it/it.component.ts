import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DateService } from '../date.service';

@Component({
  selector: 'app-it',
  templateUrl: './it.component.html',
  styleUrls: ['./it.component.css']
})
export class ItComponent implements OnInit {

constructor(public service:DateService){}
ddisplaythelist:any=[];
clr;
reload;
strt;
  ngOnInit(): void {
   this.listapicall()
  }
  listapicall(){
    this.service.list().subscribe(responsefromtheapi=>{
      
      if(responsefromtheapi['code']==200)
      {
        this.ddisplaythelist=responsefromtheapi['data']
      }
    console.log(this.ddisplaythelist);
    })
  }
  clear(array_id){
    this.service.delete(array_id).subscribe(res=>{})
    this.listapicall()
  }
  
}
  
 

