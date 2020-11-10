import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CseComponent } from './cse/cse.component';
import { ItComponent } from './it/it.component';
import { DisplayComponent } from './display/display.component';
import { FrontComponent } from './front/front.component';
import { DeptModule } from './dept/dept.module';
import { RestModule } from './rest/rest.module';
const routes: Routes = [
  { path: '', redirectTo:'front' ,pathMatch:"full" },
    { path: 'front', component: FrontComponent },
    { path: 'task', component: TaskComponent },  
    { path: 'cse', component: CseComponent },
    { path: 'it', component: ItComponent },  
    { path: 'display', component: DisplayComponent },
    {path:'dept',  loadChildren:() => import('./dept/dept.module').then (a=>a.DeptModule)},
    {path:'rest',  loadChildren:() => import('./rest/rest.module').then (b=>b.RestModule)}         

  ];

@NgModule({
  declarations: [
     AppComponent, TaskComponent, CseComponent, ItComponent, DisplayComponent,FrontComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
