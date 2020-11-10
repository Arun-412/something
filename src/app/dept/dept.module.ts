import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { Routes , RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
const routes: Routes =[
  { path:'' , redirectTo:'new', pathMatch:"full"},
  { path: 'new', component: NewComponent }
];
@NgModule({
  declarations: [
    NewComponent
  ],
  imports: [
    CommonModule , 
    RouterModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [NewComponent]
})

export class DeptModule  { }
