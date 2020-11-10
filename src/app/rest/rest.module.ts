import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { HeadComponent } from './head/head.component';
import { P1Component } from './head/p1/p1.component';
import { P2Component } from './head/p2/p2.component';
import { HedComponent } from './hed/hed.component';
import { HeComponent } from './he/he.component';
import { Routes , RouterModule } from '@angular/router';
const routes: Routes =[
  { path:'' , redirectTo:'head', pathMatch:"full"},
  { path: 'head', component: HeadComponent,
    children:[
   {path: 'p1', component:P1Component},
    {path:'p2', component:P2Component},
    ]
  },
];
@NgModule({
  declarations: [HeadComponent, P1Component, P2Component, HedComponent, HeComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes)
  ]
})
export class RestModule { }
