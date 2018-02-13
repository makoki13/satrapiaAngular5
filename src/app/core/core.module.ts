import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitComponent } from './init.component';
import { RouterModule, Routes } from '@angular/router/';


const routes: Routes = [
  {
    path: '', // Init component???
    loadChildren: './login/login.module#LoginModule' // Lazy load
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule' // Lazy load
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule' // Lazy load
  },
  {
    path: 'tutorial',
    loadChildren: './tutorial/tutorial.module#TutorialModule' // Lazy load
  },
  {
    path: 'main',
    loadChildren: './main/main.module#MainModule' // Lazy load
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot ( routes ),
    SharedModule
  ],
  declarations: [InitComponent],
  exports : [InitComponent]
})
export class CoreModule { }
