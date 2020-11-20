import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DateService } from '../date.service';

@Component({
  selector: 'app-cse',
  templateUrl: './cse.component.html',
  styleUrls: ['./cse.component.css']
})
export class CseComponent implements OnInit {

  constructor(private dateservice:DateService) { }


  ngOnInit() {

 
   
}

}
