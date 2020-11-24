import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName, FormArray } from '@angular/forms';
import { DateService } from '../date.service';
import { Validators } from '@angular/forms';
import { Route, Router , ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-cse',
  templateUrl: './cse.component.html',
  styleUrls: ['./cse.component.css']
})
export class CseComponent implements OnInit {
  createdata: FormGroup
  add
  strt
  updat
  id
  // router;
  constructor(private dateservice: DateService,private router:Router, private routeparams : ActivatedRoute)  { 
    this.id=this.routeparams.snapshot.params['id'];
    if(typeof this.id !='undefined')
     {
     this.load_data()  
    }
  }


  ngOnInit() {
    this.createdata = new FormGroup
      ({
        Reg_No: new FormControl(''),
        student: new FormArray
          ([
            new FormGroup({
              FirstName: new FormControl(''),
              LastName: new FormControl(''),
              DOB: new FormControl(''),
              address: new FormGroup
                ({
                  addressline1: new FormControl(''),
                  addressline2: new FormControl(''),
                  City: new FormControl(''),
                  country: new FormControl(''),
                  Pincode: new FormControl(''),
                }),
            }),
          ]),
        college: new FormGroup({
          department: new FormControl(''),
          name: new FormControl(''),
        }),
      });
  }
  get stud(): FormArray {
    return <FormArray>this.createdata.get('student')
  }
  onSubmit() {
    console.log(this.createdata)
    if (typeof this.id == 'undefined') {
      this.dateservice.create(this.createdata.value).subscribe(crte => {
        if (crte['code'] == 200) {
          this.strt = crte['data'];
          this.router.navigate(['/display',crte['data']['_id']]);
        }
      })
    }
    else {
      this.dateservice.edit(this.id, this.createdata.value).subscribe(et => {
        if(et['code']==200)
        {
      
        this.router.navigate(['/display',this.id]);
        }
      })
    }
  }
  load_data(){
    this.dateservice.view(this.id).subscribe(rsp=>{
      console.log("view=>",rsp)
      if(rsp['code']==200){
        this.updat=rsp['data']
        this.js()
      }
      
    })
  }
  js() {
    this.createdata.patchValue(this.updat)
    }


}