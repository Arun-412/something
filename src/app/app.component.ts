import { Component, OnInit } from '@angular/core';
import { DateService} from './date.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 export class AppComponent implements OnInit{
  
  constructor ( public date:DateService){}
  
  fun()
  {
    this.date.load().((res)=>{
      var d="this is your date"
    })
  }

  ngOnInit() {
   } 
 } 