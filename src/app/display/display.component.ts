import { Component, OnInit } from '@angular/core';
import { DateService } from '../date.service';
import { Router , ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  
  constructor(private routre:ActivatedRoute ,private router:Router,private service:DateService) { }
  disply:any=[];
  id;
  ngOnInit(): void {
    this.id=this.routre.snapshot.params['id']
    this.show(this.id)
  }
show(id)
{
  this.service.view(id).subscribe(shw=>{
    
      if(shw['code']==200)
   { 
    this.disply=shw['data']
   }
   console.log(this.disply);
   })
}
}